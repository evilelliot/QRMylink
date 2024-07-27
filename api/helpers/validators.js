const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex = /^[a-zA-Z0-9_]{6,}$/;

/* We need to test the following conditionals: 
*  email is not taken, email is a valid email address.
*/
function validateEmail(email){
    if(email && emailRegex.test(email)){
        return true;
    }else{
        return false;
    }
}
/* We need to test the following conditionals:
*  username is at least 6 characters long, username is not taken,
*  username does not contain special characters.
*/
function validateUsername(username){
    if(username && usernameRegex.test(username)){
        return true;
    }else{
        return false;
    }
}

const validators = {
    validateEmail,
    validateUsername
};


module.exports = validators;