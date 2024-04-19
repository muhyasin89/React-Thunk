import { useNavigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { useEffect } from "react";
import { useUser } from "../state/user";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = useUser((state) => state.isAuthenticated);

  // console.log("isAuthenticated", isAuthenticated)

  useEffect(() => {
    // Call navigate() when the component mounts
    if (!isAuthenticated) {
      navigate("/login");
    }
  });

  return <RootLayout />;
};
