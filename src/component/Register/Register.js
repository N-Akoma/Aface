import React,{Component} from 'react';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            regName: '',
            regEmail: '',
            regPassword: '',
        }
    }
    onName = (event)=>{
        this.setState({regName: event.target.value})
    }
    
    onEmail = (event) =>{
        this.setState({regEmail: event.target.value})
    }

    onpassword = (event) =>{
        this.setState({regPassword: event.target.value})
    }

    onSubmit = () =>{
        // fetch('http://localhost:3001/register',{
        //     method: 'post',
        //     headers: {'content-Type': 'application.json'},
        //     body: JSON.stringify({
        //         name: this.state.regName,
        //         email: this.state.regEmail,
        //         password: this.state.regPassword
        //     })
        // })
        // .then(response => response.json)
        // .then(data =>{
        //     if(data.length > 0){
        //         this.props.onRouteChange('Home')
        //     }
        // })
        // .catch(err =>{
        //     console.log(err)
        // })

            this.props.onRouteChange('Home')

        
    }

 render(){
    return (
        <div>
        <article className="br3 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 white-80">
        <div>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
                <label className="db lh-copy f6" htmlFor="email-address">Name</label>
                <input onChange ={this.onName}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" 
                name="name"  
                id="name" 
                />
            </div>
            <div className="mt3">
                <label className="db lh-copy f6" htmlFor="email-address">Email</label>
                <input onChange={this.onEmail}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address"
                 />
            </div>
            <div className="mv3">
                <label className="db  lh-copy f6" htmlFor="password">Password</label>
                <input onChange={this.onpassword}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password" 
                />
            </div>
            </fieldset>
            <div className="">
                <input 
                onClick={this.onSubmit}
                className="b white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"       
                type="submit" 
                value="Register" 
                />
            </div>
            </div>
            </main>
            </article>
        </div>
        )
        }
    }

export default Register;