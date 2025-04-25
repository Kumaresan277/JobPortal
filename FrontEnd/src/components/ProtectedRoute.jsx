import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/Auth";

function ProtectedRoute({ children }) {
    if (!isLoggedIn()) {
        return <Navigate to="/login" />;
    }
  return children;
}

export default ProtectedRoute