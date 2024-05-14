export const validatePasswordConf = (pass, confPass) => {
    return pass === confPass;
}

export const passConfValidationMessage = "Passwords do not match.";