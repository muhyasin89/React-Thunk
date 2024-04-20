import { useNavigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { useEffect } from "react";
import { useUserStore } from "../state/user";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const token = useUserStore((state) => state.token);
  const isAuthenticated = token != "" ? true : false;

  // console.log("isAuthenticated", isAuthenticated)

  useEffect(() => {
    // Call navigate() when the component mounts
    if (!isAuthenticated) {
      navigate("/login");
    }
  });

  return <RootLayout />;
};
