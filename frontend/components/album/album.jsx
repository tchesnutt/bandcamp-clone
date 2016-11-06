import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { withRouter } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  }
};

const Album = ({albums}) => {
  return (
    <div className="albums-in-grid" style={styles.root}>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          style={styles.gridList} >
          {albums.map((tile) => (
            <GridTile
              key={tile.id}
              title={tile.title}
              subtitle={<span>by <b>{tile.created_at}</b></span>}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="right"
              titlePosition="bottom"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)" >
                <img src={tile.cover_url} />
            </GridTile>
          ))}
        </GridList>
      </MuiThemeProvider>
    </div>
  )
}

export default withRouter(Album);
