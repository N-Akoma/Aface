import React, {Component} from 'react';



class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
            signPassword: '',
            signEmail: ''

        }
    }

    onSumbit = () =>{
        // fetch('http://localhost:3001/sign',{
        //     method: 'post',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         password: this.state.signPassword,
        //         email: this.state.signEmail
        //     })
        // })
        // .then(response => response.json())
        // .then(data =>{
        //     if(data === 'success'){
                // this.props.onRouteChange('Home')
        //     }
        // })

                this.props.onRouteChange('Home')

    }

    onEmail = (event) =>{
        this.setState({signEmail: event.target.value})
    }

    onPassword = (event) =>{
        this.setState({signPassword: event.target.value})
    }

    render() {
    return (
        <div>
        <article className="br2 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa2 white-80">
        <div>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="pa4 f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
                <label className="db lh-copy f6" htmlFor="email-address">Email</label>
                <input onChange = {this.onEmail}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address" 
                />
            </div>
            <div className="mv3">
                <label className="db  lh-copy f6" htmlFor="password">Password</label>
                <input onChange = {this.onPassword}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" name="password"  
                id="password" 
                />
            </div>
            </fieldset>
            <div className="">
                <input 
                className="b white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
                onClick={this.onSumbit}
                type="submit" 
                value="Sign in" 
                />
            </div>
            <div className="lh-copy mt3">
                <p onClick={() => this.props.onRouteChange('Register')}
                className="f6 link dim white db pointer">Register</p>
            </div>
            </div>
            </main>
            </article>
        </div>
        )        
    }
}


export default Signin;