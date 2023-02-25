import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

import validateL from './validateL';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { notify } from './toast';
import styles from "./Sign.module.css"

const Login = () => {

    const [data , setData] = useState({
        
        email:"",
        password:"",
        isAccept:false
    })
    const [errors , setErrors] = useState({});
    const [focuse , setFocuse] = useState({})


    useEffect(() => {
        setErrors(validateL(data));
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
                email:true ,
                password: true ,
                isAccept:true
            })
        }
    }

    return (
        <div className={styles.container}>
             <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
                    <div className={styles.formField} >
                        <label>Email</label>
                        <input 
                            
                            className={(errors.name && focuse.name) ?styles.uncompleted : styles.formInput} 
                            type="text" 
                            name='email' 
                            value={data.email} 
                            onChange={onchangeHandler} 
                            onFocus={focusHandler}  />
                            {errors.email && focuse.email && <span>{errors.email}</span>}
                    </div>
                    <div className={styles.formField} >
                        <label>Password</label>
                        <input 
                            className={(errors.name && focuse.name) ?styles.uncompleted : styles.formInput} 
                            type="password" 
                            name='password' 
                            value={data.password} 
                            onChange={onchangeHandler} 
                            onFocus={focusHandler}  />
                            {errors.password && focuse.password && <span>{errors.password}</span>}
                    </div>
                    <div className={styles.formField} >
                        <div className={styles.checkBoxContainer}>
                        <label>Do you accept our rules?</label>
                            <input 
                            type="checkbox" 
                            name='isAccept' 
                            value={data.isAccept} 
                            onChange={onchangeHandler} 
                            onFocus={focusHandler}  />
                        </div>
                        {errors.isAccept && focuse.isAccept && <span>{errors.isAccept}</span>}
                    </div>
                    <div className={styles.formButtons}>
                        <Link to="/signin">SignUp</Link>
                        <button type='submit'>Login</button>
                    </div>
             </form>
             <ToastContainer />
        </div>
    );
};

export default Login;