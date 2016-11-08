import React from 'react';
import { RaisedButton } from 'material-ui';

class UploadButton extends React.Component {
  constructor(props){
    super(props);
    this.upload = this.upload.bind(this)
  };

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS, ((error, result) => {
      if(!error){
        this.props.uploadImage(result[0]);
      }
    }).bind(this));
  }
  render() {
    return (
      <div className="upload-form">
        <RaisedButton label='Upload!' onTouchTap={this.upload}/>
      </div>
    )
  }
}

export default UploadButton;
