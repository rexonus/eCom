import React from 'react';

import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            const resp = await auth.signInWithEmailAndPassword(email,password);
            console.log(resp);
            this.setState({email:'', password:''});
        }catch(error){
            console.log(error);
        }

    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your actual email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FromInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handeChange={this.handleChange}
                        label="email"
                        required/>
                    <FromInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handeChange={this.handleChange}
                        label="password"
                        required/>
                    <div className="buttons"> 
                        <CustomButton type="submit">Sign in</CustomButton> 
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>);
    }
}

export default SignIn;