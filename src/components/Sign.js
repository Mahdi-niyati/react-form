import React , {useState , useEffect} from 'react';

import validate from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { notify } from './toast';

const Sign = () => {

    const [data , setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccept:false
    })
    const [errors , setErrors] = useState({});
    const [focuse , setFocuse] = useState({})


    useEffect(() => {
        setErrors(validate(data));
    },[data])

    const onchangeHandler = event => {
        if(event.target.name === "isAccept") {
            setData({...data , [event.target.name]: event.target.checked })
        }else {
            setData({...data , [event.target.name]:event.target.value})
        }

    }

    const focusHandler = event => {
            setFocuse({...focuse , [event.target.name]:true})
    }

    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("Successfully registered" , "success")
        }else{
            notify("Invalid data!" , "error")
            setFocuse({
                name:true , 
                email:true ,
                password: true ,
                confirmPassword:true ,
                isAccept:true
            })
        }
    }

    return (
        <div>
             <form onSubmit={submitHandler}>
                    <div>
                        <label>Name</label>
                        <input type="text" name='name' value={data.name} onChange={onchangeHandler} onFocus={focusHandler}  />
                        {errors.name && focuse.name && <span>{errors.name}</span>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name='email' value={data.email} onChange={onchangeHandler} onFocus={focusHandler}  />
                        {errors.email && focuse.email && <span>{errors.email}</span>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name='password' value={data.password} onChange={onchangeHandler} onFocus={focusHandler}  />
                        {errors.password && focuse.password && <span>{errors.password}</span>}
                    </div>
                    <div>
                        <label>ConfirmPassword</label>
                        <input type="password" name='confirmPassword' value={data.confirmPassword} onChange={onchangeHandler} onFocus={focusHandler}  />
                        {errors.confirmPassword && focuse.confirmPassword && <span>{errors.confirmPassword}</span>}
                    </div>
                    <div>
                        <label>Do you accept our rules?</label>
                        <input type="checkbox" name='isAccept' value={data.isAccept} onChange={onchangeHandler} onFocus={focusHandler}  />
                        {errors.isAccept && focuse.isAccept && <span>{errors.isAccept}</span>}
                    </div>
                    <button type='submit'>Sign Up</button>
                    <ToastContainer />
             </form>
        </div>
    );
};

export default Sign;