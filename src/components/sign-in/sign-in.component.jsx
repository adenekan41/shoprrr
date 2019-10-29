import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: '',
        }
    }
    handleSubmit = async e => {
        e.preventDefault()
        const { email , password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password: ''})
        } catch (err) {
            
        }
        
    }
    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }
    render () {
        const {email , password} = this.state
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                    <FormInput 
                        onChange={(e) => this.handleChange(e)} 
                        type="email" 
                        label="Email"
                        name="email" 
                        value={email} required
                    />
                    <FormInput 
                        onChange={(e) => this.handleChange(e)} 
                        type="password" 
                        name="password" 
                        label="Password"
                        value={password} required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton theme="primary" onClick={signInWithGoogle} >Sign In With Google</CustomButton>
                    </div>
                    
                   
                </form>
            </div>
        )
    }
}

export default SignIn