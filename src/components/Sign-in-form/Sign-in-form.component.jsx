import {useState} from 'react';
import {signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from '../../Utils/Firebase/Firebase.utils';

import FormInput from '../Form-input/Form-input.component';
import Button from '../Button/Button.component'

import './Sign-in-form.styles.scss'

//Build in the funcitonality first

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    //Destructuring the values that will be stored in the form fields boject 

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    //Retrieved user object with its setCurrentUser function destructed

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWIthGoogle = async () => {
        await signInWithGooglePopup();
    };


    //Will stop the form from submitting the form with its current details
    const handleSubmit = async (event) => {
        event.preventDefault()

        //Sends out the given information for verification to the email provider
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
        } catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default: 
                    console.log(error);
            }
            if(error.code === 'auth/wrong-password'){
                alert('Incorrect password for email');
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
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                
                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onCLick={signInWIthGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm