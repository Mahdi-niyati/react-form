const validate = data => {
    const errors = {};


    if(!data.email){
        errors.email = "Email required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email address is invalid"
    }else {
        delete errors.email;
    }


    if(!data.password) {
        errors.password = "password is required"
    }else if ( data.password.length < 6) {
        errors.password = "password need to be 6 character or more"
    }else {
        delete errors.password ;
    }


    if(!data.isAccept) {
        errors.isAccept = "Accept our regulations"
    }else {
        delete errors.isAccept ;
    }


    return errors;
};

export default validate;