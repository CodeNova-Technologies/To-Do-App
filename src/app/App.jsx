import React from 'react';
import Dashboard from '../pages/Dashboard/Dashboard';
import './App.css';
import CompletedTasksPage from '../pages/Task/CompletedTasksPage';

function App() {
  return (
    <div>
      <CompletedTasksPage />
      <Dashboard />
    </div>
  );
}

export default App;
