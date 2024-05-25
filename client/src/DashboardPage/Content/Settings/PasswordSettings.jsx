import React, { useState } from 'react'
import { passwordValidationMessage, validatePassword } from '../../../shared/validators';
import { Input } from '../../../shared/Components/Input';


const inputs = [
  {
    field: "password",
    label: "Current Password",
    validationMessage: passwordValidationMessage,
    type: "password",
  },
  {
    field: "newPassword",
    label: "New Password",
    validationMessage: passwordValidationMessage,
    type: "password",
  },
];


export const PasswordSettings = () => {
  const [formState, setFormState] = useState({
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    newPassword: {
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
      case "password":
        isValid = validatePassword(value);
        break;
      case "newPassword":
        isValid = validatePassword(value);
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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // TODO
    // Save settings using http request
  };

  const isSubmitFormButtonDisabled = !formState.password.isValid ||!formState.newPassword.isValid;

  return (
    <div className="w-full p-4 mt-4 rounded-md sm:w-full sm:max-w-sm bg-slate-200">
      <form className="max-w-2xl space-y-6">
        {inputs.map((input) => (
          <Input
            key={input.field}
            field={input.field}
            labelFor={input.field}
            label={input.label}
            value={formState[input.field].value}
            onChangeHandler={handleInputValueChange}
            type={input.type}
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState[input.field].showError}
            validationMessage={input.validationMessage}
          />
        ))}

        <div>
          <button
            onClick={handleFormSubmit}
            disabled={isSubmitFormButtonDisabled}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
