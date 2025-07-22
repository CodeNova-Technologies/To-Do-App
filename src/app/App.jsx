import './App.css';
import CompletedTasksPage from '../pages/Task/CompletedTasksPage';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Profile/Profile'

function App() {
  return (
     <div>
      <Profile/>
      <CompletedTasksPage />
      <Dashboard />
    </div>
  );
}

export default App;
