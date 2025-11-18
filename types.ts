export interface TaskItem {
  id: string;
  title: string;
  description?: string;
  status: 'completed' | 'pending' | 'in-progress';
}

export interface Phase {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  tasks: TaskItem[];
}
