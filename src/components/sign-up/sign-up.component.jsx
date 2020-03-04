import React from 'react';

import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const {displayName, email, password, confirmPassword} = this.state; 
        console.log('handleSubmit on signUp' + 'diplName:' + displayName);
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            console.log('handleSubmit on signUp: after creation' + 'diplName:' + displayName);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
        }catch(error){
            console.error(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }


    render(){
        const {displayName, email, password, confirmPassword} = this.state; 
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FromInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        label="Display name"
                        onChange={this.handleChange}
                        required
                    />
                    <FromInput
                        type="text"
                        name="email"
                        value={email}
                        label="Email"
                        onChange={this.handleChange}
                        required
                    />
                    <FromInput
                        type="password"
                        name="password"
                        value={password}
                        label="Password"
                        onChange={this.handleChange}
                        required
                    />
                    <FromInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        label="Confirm password"
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
            );
    }

}

export default SignUp;