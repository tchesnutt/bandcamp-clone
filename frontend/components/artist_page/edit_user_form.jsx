import React from 'react';
import UploadButton from '../cloud';
import { merge } from 'lodash';
import { Dialog, FlatButton, RaisedButton, TextField, List, ListItem, Card, CardMedia, CardTitle, CardHeader, CardActions, FontIcon, red600 } from 'material-ui';


const submitButtonStyle = {
  width: '100%'
}

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_pic_url: '',
      description: '',
      username: '',
      id: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      profile_pic_url: nextProps.currentUser.profile_pic_url,
      description: nextProps.currentUser.description,
      username: nextProps.currentUser.username,
      id: nextProps.currentUser.id
    })
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
    this.props.updateUser(user);
  }


  render(){
    return(
      <section className='edit-user-form'>
        <Dialog open={this.props.editUserModal}
                onRequestClose={this.props.closeEditUserModal}
                modal={false}
                title={'E D I T  Y O U R  D E T A I L S'}>
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
            <div>
              <br/>
              <h1>Change Profile Picture</h1>
              <br/>
              <UploadButton uploadImage={this.uploadImage} style={submitButtonStyle} />
              <br/>
            </div>
            <br/>
            <RaisedButton label="Submit Edit" type='submit' style={submitButtonStyle} primary={true}/>
          </form>
        </Dialog>
      </section>
    )
  }
}

export default EditUserForm;
