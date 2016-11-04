import React from 'react';
import {Link, withRouter} from 'react-router';
import {Dialog, FlatButton, RaisedButton, TextField} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
            username: 'guest',
            password: 'password'
        };
        this.props.login({user});
    }

    render() {
        let buttonName,
            linkText,
            linkDesc,
            guestLogin;
        if (this.props.formType === "login") {
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
        console.log(this.props)
        return (
            <div className='session-form'>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <Dialog open={this.props.authModalOpen} onRequestClose={this.props.closeAuthModal} modal={false}>
                        <div className="login-form-container">
                            <form onSubmit={this.handleSubmit} className="login-form-box">
                                <div className="login-form">
                                    <TextField type="text" hintText="Username" floatingLabelText="Username" value={this.state.username} onChange={this.update("username")} className="login-input" fullWidth={true} errorText={this.props.errors.username === undefined
                                        ? ""
                                        : `username ${this.props.errors.username.join(", ")}`}/>
                                    <br/>
                                    <TextField type="password" hintText="Password" floatingLabelText="Password" value={this.state.password} onChange={this.update("password")} className="login-input" fullWidth={true} errorText={this.props.errors.password === undefined
                                        ? ""
                                        : this.props.errors.password.join(", ")}/>
                                    <br/>
                                    <FlatButton label={buttonName} type="submit" style={buttonStyle} primary={true}/>
                                    <br/>
                                </div>
                            </form>
                        </div>
                        <div className="bottom-row-login-form">
                            {guestLogin}
                            <FlatButton label={linkText} secondary={true} onTouchTap={this.handleToggleFormType}/>
                        </div>
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default withRouter(SessionForm);
