
const validatePassword = (password) => {  
    const minLength = 8;
    const maxLength = 16;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (password.length < minLength || password.length > maxLength) {
        return false;
    }
    if (!hasUpperCase || !hasLowerCase || !hasSpecialChar) {
        return false;
    }
    return true;
}

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

module.exports = { validatePassword, validateEmail };