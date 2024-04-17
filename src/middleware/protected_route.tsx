import { useNavigate } from "react-router-dom";
import { useUser } from "../state/user";

export const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const isAuthenticated = useUser((state) => state.isAuthenticated);
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
    return (
      {children}
    );
  };