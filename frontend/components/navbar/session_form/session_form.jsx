import React from 'react';
import { Link, withRouter } from 'react-router';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';

const buttonStyle = {
    width: '100%',
    fontSize: '60px'
};

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            formType: 'login'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggleFormType = this.handleToggleFormType.bind(this);
        this.handleGuestLogin = this.handleGuestLogin.bind(this);
    }

    handleToggleFormType(e) {
        e.preventDefault();
        this.setState({
            formType: this.state.formType === 'login'
                ? 'signup'
                : 'login'
        });
    };

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;
        this.state.formType === 'login' ? this.props.login({user}) : this.props.signup({user});
    }

    handleGuestLogin(e) {
        e.preventDefault();
        const user = {
            username: 'Guest',
            password: 'password'
        };
        this.props.login({user});
    }

    render() {
        let buttonName,
            linkText,
            linkDesc,
            guestLogin;
        if (this.state.formType === "login") {
            buttonName = "Log In";
            linkDesc = "Want an account kiddo?"
            linkText = 'Sign Up';
            guestLogin = (<FlatButton label='Guest Login' secondary={true} onClick={this.handleGuestLogin}/>)
        } else {
            buttonName = 'Sign up';
            linkDesc = 'Have an acount?';
            linkText = 'Log In'
            guestLogin = (<FlatButton label='Guest Login' secondary={true} onTouchTap={this.handleGuestLogin}/>)
        }
        return (
            <section className='session-form'>
              <Dialog open={this.props.authModalOpen} onRequestClose={this.props.closeAuthModal} modal={false} title={buttonName}>
                <section className="login-form-container">
                  <form onSubmit={this.handleSubmit} className="login-form-box">
                    <section className="login-form">
                      <TextField type="text" hintText="Username" floatingLabelText="Username" value={this.state.username} onChange={this.update("username")} className="login-input" fullWidth={true} errorText={this.props.errors.username === undefined
                        ? ""
                        : `username ${this.props.errors.username.join(", ")}`}/>
                      <br/>
                      <TextField type="password" hintText="Password" floatingLabelText="Password" value={this.state.password} onChange={this.update("password")} className="login-input" fullWidth={true} errorText={this.props.errors.password === undefined
                        ? ""
                        : this.props.errors.password.join(", ")}/>
                      <br/>
                      <FlatButton label="Submit" type="submit" style={buttonStyle} primary={true}/>
                      <br/>
                    </section>
                  </form>
                </section>
                <section className="bottom-row-login-form">
                  {guestLogin}
                  <FlatButton label={linkText} secondary={true} onTouchTap={this.handleToggleFormType}/>
                </section>
              </Dialog>
            </section>
        );
    }
}

export default withRouter(SessionForm);
