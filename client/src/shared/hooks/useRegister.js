import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerRequest } from "../../api";
import toast from "react-hot-toast";

export const useRegister = () => {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (username, email, password) => {
    setIsLoading(true);
    const response = await registerRequest({
        username,
        email,
        password,
    });
    setIsLoading(false);

    if (response.error) {
      return toast.error(
        response.exception?.response?.data.message ||
          "Error ocurred while signing up. Please try again"
      );
    }

    const { userDetails } = response.data;

    localStorage.setItem("user", JSON.stringify(userDetails));

    navigate("/");
  }

  return {
    register,
    isLoading,
  };
};
