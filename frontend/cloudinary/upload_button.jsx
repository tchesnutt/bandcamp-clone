var React = require("react");

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.props.uploadImage(results[0]);
      }
    }.bind(this));
  },
  render: function () {
    return (
      <sectionclassName="upload-form">
        <button onClick={this.upload}>Upload new image!</button>
      </session>
    );
  }
});

module.exports = UploadButton;
