import React , {useState , useEffect} from 'react';

import validate from './validate';

const Sign = () => {

    const [data , setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccept:false
    })
    const [errors , setErrors] = useState({});


    useEffect(() => {
        setErrors(validate(data));
        console.log(errors);
    },[data])

    const onchangeHandler = event => {
        if(event.target.name === "isAccept") {
            setData({...data , [event.target.name]: event.target.checked })
        }else {
            setData({...data , [event.target.name]:event.target.value})
        }

    }

    return (
        <div>
             <form>
                    <div>
                        <label>Name</label>
                        <input type="text" name='name' value={data.name} onChange={onchangeHandler}  />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name='email' value={data.email} onChange={onchangeHandler}  />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name='password' value={data.password} onChange={onchangeHandler}  />
                    </div>
                    <div>
                        <label>ConfirmPassword</label>
                        <input type="password" name='confirmPassword' value={data.confirmPassword} onChange={onchangeHandler}  />
                    </div>
                    <div>
                        <label>Do you accept our rules?</label>
                        <input type="checkbox" name='isAccept' value={data.isAccept} onChange={onchangeHandler}  />
                    </div>
             </form>
        </div>
    );
};

export default Sign;