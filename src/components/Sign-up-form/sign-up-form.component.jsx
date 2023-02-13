import {useState} from 'react';

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../Utils/Firebase/Firebase.utils';
import FormInput from '../Form-input/Form-input.component';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    //Destructuring the values that will be stored in the form fields boject 

    const {formFields, setFormFields} = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    console.log(formFields)

    //Will stop the form from submitting the form with its current details
    const handleSubmit = async (event) => {
        event.preventDefault()
        if(password !== confirmPassword){
            alert("Password do not match")
            return;
        } 

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            }
            else{
                console.error(error)
            }
        }
    }

    //Updates the value of the field and stored form data
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }


    //the values of the fields are updated by the hooks and and store their state
    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />
                
                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />
                
                <label>Confirm Password  </label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm