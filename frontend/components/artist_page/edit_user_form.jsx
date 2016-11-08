import React from 'react';
import { Dialog, FlatButton, RaisedButton, TextField, List, ListItem, Card, CardMedia, CardTitle, CardHeader, CardActions, FontIcon, red600 } from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { merge } from 'lodash';
import UploadButton from '../cloud';


const submitButtonStyle = {
  width: '100%'
}

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_pic_url: "",
      description: "",
      username: "",
      id: props.currentUser.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  update(field) {
    return e=> this.setState({[field]: e.currentTarget.value});
  }

  uploadImage(image) {
    this.setState({ profile_pic_url: image.url });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log(this.state);
    this.props.updateUser(user);
  }


  render(){
    console.log(this);
    return(
      <div className='edit-user-form'>
        <MuiThemeProvider muiTHeme={getMuiTheme(lightBaseTheme)}>
          <Dialog open={this.props.editUserModal}
                  onRequestClose={this.props.closeEditUserModal}
                  modal={false}
                  title={'E D I T Y O U R D E T A I L S'}>
            <form onSubmit={this.handleSubmit}>
              <TextField type='text'
                         hintText='Change your Username'
                         floatingLabelText='Username'
                         fullWidth={true}
                         onChange={this.update("username")}
                         errorText={this.props.username === undefined ? "" : `Username ${this.props.username.join(", ")}`}/>
              <br/>
              <TextField type='text'
                         rows={4}
                         rowsMax={8}
                         fullWidth={true}
                         multiLine={true}
                         onChange={this.update("description")}
                         hintText='Edit User Description'
                         floatingLabelText='Description'/>
              <br/>
              <UploadButton uploadImage={this.uploadImage}/>
              <br/>
              <FlatButton label="Submit Edit" type='submit' style={submitButtonStyle} primary={true}/>
            </form>
          </Dialog>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default EditUserForm;
