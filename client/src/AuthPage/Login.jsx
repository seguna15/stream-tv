import React, {  useState } from "react";
import { AuthInput } from "./AuthInput";
import { emailValidationMessage, passwordValidationMessage, validateEmail, validatePassword } from "../shared/validators";

export const Login = ({switchAuthHandler}) => {
    
    const [formState, setFormState] = useState({
        email: {
            value: '',
            isValid: false,
            showError: false,
        },
        password: {
            value: '',
            isValid: false,
            showError: false,
        }
    })


    const handleInputValueChange = (value, field) => {
        setFormState(prevState => ({
            ...prevState, 
            [field]: {
                ...prevState[field],
                value,
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;

        switch (field) {
            case 'email':
                isValid = validateEmail(value)
                break;
            case 'password':
                isValid = validatePassword(value)
                break;
            default:
                break;
        }
        setFormState(prevState => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError:!isValid,
            }
        }))
    }

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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
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

            <div className="text-sm">
              <a className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
            <div>
              <button
                disabled={
                  !formState.password.isValid || !formState.email.isValid
                }
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-sm text-center text-gray-500">
            Not a member?
            <button
              onClick={switchAuthHandler}
              className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              sign up
            </button>
          </p>
        </div>
      </div>
    </>
  );
};
