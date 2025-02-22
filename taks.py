import zipfile
import os
import re
import csv
import json
import spacy
from datetime import datetime

# Dictionary mapping labels to their respective abbreviations
label_to_id = {
    'Deadline': 'D',
    'Important': 'I',
    'Complete': 'C',
}

# Keywords for classification
important_keywords = [
    'urgent', 'immediate', 'important', 'critical', 'asap', 'attention', 'priority',
    'reminder', 'alert', 'follow up', 'notify', 'ping', 'check', 'review', 'update', 
    'attention needed', 'heads up', 'must do', 'mandatory', 'essential', 'critical update',
    'take action', 'do not delay', 'on top of', 'respond asap', 'act fast', 'address now',
    'noteworthy', 'significant', 'requires attention', 'pressing issue', 'high-priority',
    'top priority', 'do this first', 'act now', 'key task', 'crucial', 'imperative'
]

deadline_keywords = [
    'submit', 'due', 'deadline', 'by', 'final', 'last date', 'expiry',
    'last call', 'closing soon', 'time-sensitive', 'cutoff', 'finalize', 'complete', 
    'must be done', 'wrap up', 'closing date', 'expiring', 'ending', 'final notice', 
    'submission', 'turn in', 'make sure', 'before time', 'finish by', 'hand in',
    'time limit', 'submission deadline', 'drop-dead date', 'countdown', 'hard stop',
    'approaching deadline', 'wrap this up', 'final push', 'due date coming up',
    'last chance', 'about to expire', 'out of time', 'final steps', 'complete before'

]

# Conversational patterns for classification
conversational_patterns = [
    "don't forget", "make sure", "final call", "last call", "this needs to be done by",
    "submission closes", "must be done", "we have until", "we need to act on",
    "let’s finalize", "wrapping up soon", "hurry up", "before it’s too late",
    "urgent action required", "time is running out", "last reminder", "closing in on deadline",
    "ensure this is completed", "just a heads-up", "this is critical", "do not ignore",
    "immediate response needed", "reminder: deadline ahead", "keep this in mind"
]

# Function to classify message
def classify_message(text):
    text_lower = text.lower()
    labels_pred = []
    
    if any(keyword in text_lower for keyword in deadline_keywords):
        labels_pred.append('Deadline')
    if any(keyword in text_lower for keyword in important_keywords):
        labels_pred.append('Important')
    if any(pattern in text_lower for pattern in conversational_patterns):
        labels_pred.append('Deadline')
    if 'completed' in text_lower or 'finish' in text_lower:
        labels_pred.append('Complete')
        
    return labels_pred

# Function to extract text file from ZIP
def extract_zip(zip_path):
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        extracted_files = zip_ref.namelist()
        for file in extracted_files:
            if file.endswith('.txt'):  # Extract only text files
                zip_ref.extract(file, os.path.dirname(zip_path))
                return os.path.join(os.path.dirname(zip_path), file)
    return None

# Function to parse WhatsApp chat from a text file
def read_whatsapp_chat(file_path, max_lines=None):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    messages = []
    for i, line in enumerate(lines):
        if max_lines is not None and i >= max_lines:
            break
        match = re.match(r"(\d{1,2}/\d{1,2}/\d{4}), (\d{1,2}:\d{2} (?:AM|PM)) - (.*?): (.*)", line)
        if match:
            date, time, sender, message = match.groups()
            messages.append([date, time, sender, message])
    
    print(f"Total messages parsed: {len(messages)}")  # Debug statement
    return messages

# Function to extract and classify messages
def extract_relevant_messages(messages, nlp_model):
    task_messages = []
    for date, time, sender, msg in messages:
        doc = nlp_model(msg)
        predicted_labels = classify_message(msg)
        if predicted_labels:  # Only add messages with labels
            task_messages.append([date, time, sender, msg, predicted_labels])
    
    print(f"Total relevant messages: {len(task_messages)}")  # Debug statement
    return task_messages

# Function to save messages to CSV
def save_to_csv(messages, output_file):
    with open(output_file, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Date", "Time", "Sender", "Message", "Labels"])
        writer.writerows(messages)

# Function to convert CSV to JSON
def csv_to_json(csv_file, json_file):
    with open(csv_file, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        json_data = list(reader)
    
    with open(json_file, "w", encoding="utf-8") as f:
        json.dump(json_data, f, indent=4)

# Main Execution
if __name__ == "__main__":
    zip_path = input("Enter the path of the ZIP file: ").strip()  # Ask user for ZIP file path
    extracted_txt = extract_zip(zip_path)

    if extracted_txt:
        print(f"Extracted file: {extracted_txt}")
        
        nlp = spacy.load("en_core_web_sm")
        chat_messages = read_whatsapp_chat(extracted_txt)
        filtered_messages = extract_relevant_messages(chat_messages, nlp)

        csv_file = "chat_output.csv"
        save_to_csv(filtered_messages, csv_file)

        json_file = csv_file.replace('.csv', '.json')
        csv_to_json(csv_file, json_file)

        print(f"CSV file created: {csv_file}")
        print(f"JSON file created: {json_file}")
    else:
        print("No valid text file found in the ZIP.")
