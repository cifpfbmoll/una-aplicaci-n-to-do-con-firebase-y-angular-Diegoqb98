import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<string>();
  @Output() toggleComplete = new EventEmitter<{ id: string, completed: boolean }>();
  @Output() editTask = new EventEmitter<Task>();

  isAnimating = false;

  onDelete(): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      this.deleteTask.emit(this.task.id!);
    }
  }

  onToggleComplete(): void {
    this.isAnimating = true;
    setTimeout(() => this.isAnimating = false, 600);
    
    this.toggleComplete.emit({
      id: this.task.id!,
      completed: !this.task.completed
    });
  }

  onEdit(): void {
    this.editTask.emit(this.task);
  }

  getTimeAgo(date: any): string {
    if (!date) return '';
    
    let taskDate: Date;
    
    if (date && typeof date.toDate === 'function') {
      taskDate = date.toDate();
    } else if (date instanceof Date) {
      taskDate = date;
    } else if (typeof date === 'string' || typeof date === 'number') {
      taskDate = new Date(date);
    } else {
      return '';
    }
    
    if (isNaN(taskDate.getTime())) {
      return '';
    }
    
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - taskDate.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
      return 'Ahora mismo';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `Hace ${minutes} min`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `Hace ${hours}h`;
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return `Hace ${days}d`;
    } else {
      return taskDate.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short'
      });
    }
  }

  formatDate(date: any): string {
    if (!date) return '';
    
    let taskDate: Date;
    
    // Manejar Timestamps de Firestore
    if (date && typeof date.toDate === 'function') {
      taskDate = date.toDate();
    } else if (date instanceof Date) {
      taskDate = date;
    } else if (typeof date === 'string' || typeof date === 'number') {
      taskDate = new Date(date);
    } else {
      return '';
    }
    
    // Verificar que la fecha sea válida
    if (isNaN(taskDate.getTime())) {
      return '';
    }
    
    return taskDate.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
