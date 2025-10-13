export interface Task {
  id?: string;
  title: string;
  description?: string;
  completed: boolean;
  priority?: 'high' | 'normal' | 'low';
  createdAt: any; // Puede ser Date o Timestamp de Firestore
  updatedAt: any; // Puede ser Date o Timestamp de Firestore
}

export interface CreateTaskRequest {
  title: string;
  description?: string;
  priority?: 'high' | 'normal' | 'low';
}

export interface UpdateTaskRequest {
  title?: string;
  description?: string;
  completed?: boolean;
}
