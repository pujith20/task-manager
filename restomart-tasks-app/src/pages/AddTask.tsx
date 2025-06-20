
import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { taskService } from '../services/taskService';
import TaskForm from '../components/TaskForm';
import { CreateTaskRequest } from '../types/task';
import { toast } from '@/hooks/use-toast';

const AddTask: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: taskService.createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast({
        title: "Success",
        description: "Task created successfully",
      });
      navigate('/home');
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create task",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (data: CreateTaskRequest) => {
    createMutation.mutate(data);
  };

  const handleCancel = () => {
    navigate('/home');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <TaskForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        isLoading={createMutation.isPending}
      />
    </div>
  );
};

export default AddTask;
