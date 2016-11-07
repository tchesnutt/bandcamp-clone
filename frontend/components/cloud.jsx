import React from 'react';
import { RaisedButton } from 'material-ui';

class UploadButton extends React.Component {
  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS, function(error, result){
      if(!error){
        this.props.postImage(results[0]);
      }
    }.bind(this));
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
