import { changePasswordRequest } from "../../api"
import toast from "react-hot-toast";

export const useChangePassword = () => {

  const changePassword = async (password, newPassword) => {
    const response = changePasswordRequest({password, newPassword});
    if (response.exception) {
      return toast.error(
        response.exception?.response?.data.message ||
          "Error occurred when changing password"
      );
    }

    toast.success("Password changed successfully");
  }

  return {
    changePassword,
  }
}
