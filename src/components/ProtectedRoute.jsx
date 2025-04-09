import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // Check if user is authenticated and has admin role
  const isAdmin = user?.app_metadata?.role === 'admin';

  if (!user || !isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;
}