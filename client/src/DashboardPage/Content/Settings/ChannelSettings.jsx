import React, { useState } from 'react'
import { avatarUrlValidationMessage, titleValidationMessage, usernameValidationMessage, validateAvatarUrl, validateTitle, validateUsername,  } from '../../../shared/validators';
import { descriptionValidationMessage, validateDescription } from '../../../shared/validators/validateDescription';
import { Input } from '../../../shared/Components/Input';

const inputs = [
    {
        field: 'username',
        label: 'Username',
        validationMessage: usernameValidationMessage,
        type: "text",
    },
    {
        field: 'title',
        label: 'Title',
        validationMessage: titleValidationMessage,
        type: "text",
    },
    {
        field: 'avatarUrl',
        label: 'Avatar Url',
        validationMessage: avatarUrlValidationMessage,
        type: "text",
    },
    {
        field: 'description',
        label: 'Description',
        validationMessage: descriptionValidationMessage,
        type: "text",
        textarea: true
    }
]


export const ChannelSettings = ({settings, saveSettings}) => {
    const [formState, setFormState] = useState({
        title: {
            isValid: validateTitle(settings.title),
            showError: false,
            value: settings.title
        },
        username: {
            isValid: validateUsername(settings.username),
            showError: false,
            value: settings.username
        },
        avatarUrl: {
            isValid: validateAvatarUrl(settings.avatarUrl),
            showError: false,
            value: settings.avatarUrl
        },
        description: {
            isValid: validateDescription(settings.description),
            showError: false,
            value: settings.description
        },
    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
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
        case "username":
          isValid = validateUsername(value);
          break;
        case "avatarUrl":
          isValid = validateAvatarUrl(value);
          break;
        case "title":
          isValid = validateTitle(value);
          break;
        case "description":
          isValid = validateDescription(value);
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

        saveSettings({
          username: formState.username.value,
          title: formState.title.value,
          description: formState.description.value,
          avatarUrl: formState.avatarUrl.value,
        })
    }

    const isSubmitFormButtonDisabled = !formState.username.isValid || !formState.title.isValid || !formState.avatarUrl.isValid || !formState.description.isValid ;

    
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
            textarea={input.textarea}
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
