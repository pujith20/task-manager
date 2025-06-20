
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckSquare, ArrowRight, Plus, Edit, Trash2 } from 'lucide-react';

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/20">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <CheckSquare className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            TaskMaster Pro
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern, efficient task management system designed for productivity. 
            Organize, track, and complete your tasks with style.
          </p>
          
          <button
            onClick={() => navigate('/home')}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Plus className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Tasks</h3>
            <p className="text-gray-600">Easily add new tasks with titles, descriptions, due dates, and status tracking.</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Edit className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Edit & Update</h3>
            <p className="text-gray-600">Modify task details, update status, and keep everything current and organized.</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Tasks</h3>
            <p className="text-gray-600">Remove completed tasks, filter by status, and maintain a clean workspace.</p>
          </div>
        </div>

        {/* Tech Stack Info */}
        <div className="mt-12 bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <p className="text-sm text-gray-500 mb-2">Built with modern technologies</p>
          <div className="flex justify-center items-center space-x-6 text-sm font-medium text-gray-600">
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>React Query</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
