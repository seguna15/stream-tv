import React from 'react'

export const Input = ({
    field, label, value, onChangeHandler, type, labelFor, showErrorMessage, validationMessage, onBlurHandler, textarea
}) => {

    const handleValueChange = (e) => {
        onChangeHandler(e.target.value, field);
    }

    const handleInputBlur = (e) => {
        onBlurHandler(e.target.value, field)
    }

  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={labelFor}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      </div>
      <div className="mt-2">
        {textarea ? (
          <textarea
            type={type}
            id={labelFor}
            value={value}
            onChange={handleValueChange}
            onBlur={handleInputBlur}
            rows={5}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        ) : (
          <input
            type={type}
            id={labelFor}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={value}
            onChange={handleValueChange}
            onBlur={handleInputBlur}
          />
        )}
        <span className="text-xs text-red-500">
          {showErrorMessage && validationMessage}
        </span>
      </div>
    </div>
  );
}

