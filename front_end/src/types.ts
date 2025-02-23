export interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  attendance: number;
}

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: number;
}

export interface Class {
  id: string;
  name: string;
  subject: string;
  students: number;
  time: string;
}