import React, { useState } from "react";
import { AuthInput } from "./AuthInput";
import {
  emailValidationMessage,
  passConfValidationMessage,
  passwordValidationMessage,
  usernameValidationMessage,
  validateEmail,
  validatePassword,
  validatePasswordConf,
  validateUsername,
} from "../shared/validators";
import { useRegister } from "../shared/hooks";

export const Register = ({ switchAuthHandler }) => {
  const {register, isLoading} = useRegister();
  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
    passwordConf: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;

    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case 'username':
        isValid = validateUsername(value);
        break;
      case 'passwordConf':
        isValid = validatePasswordConf(formState.password.value,value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    register(formState.username.value, formState.email.value, formState.password.value);
  }
  const isSubmitButtonDisabled =
    isLoading ||
    !formState.password.isValid ||
    !formState.email.isValid ||
    !formState.username.isValid ||
    formState.password.value !== formState.passwordConf.value;

    
  return (
    <>
      <div className="flex flex-col justify-center w-full min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="w-auto h-10 mx-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Sign up to create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <AuthInput
              field="username"
              labelFor="username"
              label="Username"
              value={formState.username.value}
              onChangeHandler={handleInputValueChange}
              type="text"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.username.showError}
              validationMessage={usernameValidationMessage}
            />
            <AuthInput
              field="email"
              labelFor="email"
              label="Email"
              value={formState.email.value}
              onChangeHandler={handleInputValueChange}
              type="email"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.email.showError}
              validationMessage={emailValidationMessage}
            />
            <AuthInput
              field="password"
              labelFor="password"
              label="Password"
              value={formState.password.value}
              onChangeHandler={handleInputValueChange}
              type="password"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.password.showError}
              validationMessage={passwordValidationMessage}
            />

            <AuthInput
              field="passwordConf"
              labelFor="passwordConf"
              label="Password Confirmation"
              value={formState.passwordConf.value}
              onChangeHandler={handleInputValueChange}
              type="password"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.passwordConf.showError}
              validationMessage={passConfValidationMessage}
            />

            <div>
              <button
                onClick={handleRegister}
                disabled={isSubmitButtonDisabled}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p
            onClick={switchAuthHandler}
             className="mt-10 text-sm text-center text-gray-500"
          >
            Already have an account?
            <span className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              {" "}
              sign in
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
