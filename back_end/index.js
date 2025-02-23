const path = require('path');
const express = require('express');
const multer = require('multer');
const decompress = require('decompress');
const fs = require('fs');
const session = require('express-session');
const flash = require('express-flash');
const axios = require('axios');
const FormData = require('form-data');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3000;

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3000', // Adjust the origin as needed
    methods: ['GET', 'POST'],
    credentials: true
}));

// Ensure the uploads directory exists
const uploadDir = path.resolve(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: uploadDir,
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['text/plain', 'text/csv', 'application/zip', 'application/x-zip-compressed'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        req.flash('error', 'Invalid file type. Only .txt, .csv, and compressed .txt or .csv files are allowed.');
        cb(null, false);
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter
});

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

// Serve frontend build files
app.use(express.static(path.join(__dirname, '../front_end/dist')));

app.get('/', (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error('Error reading upload directory', err);
            return res.status(500).send('Error reading upload directory');
        }
        return res.render("homepage", { files, error: req.flash('error') });
    });
});

app.get('/api/files', (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error('Error reading upload directory', err);
            return res.status(500).send('Error reading upload directory');
        }
        res.json(files);
    });
});

app.post('/api/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        console.error('No file uploaded or invalid file type.');
        return res.status(400).json({ error: 'No file uploaded or invalid file type.' });
    }

    const filePath = path.join(uploadDir, req.file.filename);

    try {
        await decompress(filePath, uploadDir);
        console.log('Decompression complete');
    } catch (err) {
        console.error('Error during decompression', err);
        return res.status(500).json({ error: 'Error during decompression' });
    }

    // Send the file to the Python backend
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));

    try {
        const response = await axios.post('http://localhost:3000/api/process', form, {
            headers: {
                ...form.getHeaders()
            }
        });
        console.log('API call to Python backend successful:', response.data);
        res.json(response.data);
    } catch (apiErr) {
        console.error('Error making API call to Python backend', apiErr);
        return res.status(500).json({ error: 'Error making API call to Python backend' });
    } finally {
        // Delete the file after sending it to the Python backend
        fs.unlinkSync(filePath);
    }
});

app.post('/api/delete', (req, res) => {
    const { fileName } = req.body;
    const filePath = path.join(uploadDir, fileName);

    fs.unlink(filePath, err => {
        if (err) {
            console.error('Error deleting file', err);
            return res.status(500).json({ error: 'Error deleting file' });
        }
        res.status(200).json({ message: 'File deleted successfully' });
    });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));