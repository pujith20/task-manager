
import React from 'react';
import { Task } from '../types/task';
import { Calendar, Clock, Edit, Trash2, CheckCircle, Circle, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
  const getStatusIcon = () => {
    switch (task.status) {
      case 'done':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in_progress':
        return <Play className="w-5 h-5 text-yellow-500" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusBadge = () => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";
    switch (task.status) {
      case 'done':
        return `${baseClasses} bg-green-100 text-green-700`;
      case 'in_progress':
        return `${baseClasses} bg-yellow-100 text-yellow-700`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700`;
    }
  };

  const getStatusText = () => {
    switch (task.status) {
      case 'done':
        return 'Completed';
      case 'in_progress':
        return 'In Progress';
      default:
        return 'To Do';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && task.status !== 'done';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3 flex-1">
            {getStatusIcon()}
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {task.title}
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              to={`/edit/${task.id}`}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              <Edit className="w-4 h-4" />
            </Link>
            <button
              onClick={() => onDelete(task.id)}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Description */}
        {task.description && (
          <p className="text-gray-600 mb-4 line-clamp-2">
            {task.description}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className={getStatusBadge()}>
              {getStatusText()}
            </span>
            {task.dueDate && (
              <div className={`flex items-center space-x-1 text-sm ${
                isOverdue ? 'text-red-600' : 'text-gray-500'
              }`}>
                <Calendar className="w-4 h-4" />
                <span>{formatDate(task.dueDate)}</span>
                {isOverdue && <span className="text-xs font-medium">(Overdue)</span>}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-400">
            <Clock className="w-3 h-3" />
            <span>{formatDate(task.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
