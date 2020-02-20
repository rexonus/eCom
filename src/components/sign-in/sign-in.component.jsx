import React from 'react';

import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''});
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
                    
                    <CustomButton type="submit">Sign in</CustomButton> 
                </form>
            </div>);
    }
}

export default SignIn;