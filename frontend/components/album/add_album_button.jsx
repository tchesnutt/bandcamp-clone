import React from 'react';
import { FlatButton } from 'material-ui';

const AddAlbumButton = ({props}) => {
  return (
    <section className="session">
        <FlatButton label="Add Album" onTouchTap={props.openAddAlbumModal}/>
    </section>
  );
};

export default AddAlbumButton;
