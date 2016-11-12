# Sandcamp

## Features and Implementation
### Backend Structure
  Users have many albums which in turn have many tracks thus, tracks and users are connected through albums.
### Querying for Albums and Tracks
  Upon entering a User page, an API request is made to the db using the user_id (taken from the route params) fetching all the albums created by that user. A similar logic is used once entering an album page to request the tracks for a album.
### Rendering
  All albums are rendered using the same logic; a 'Card' from 'material-ui'. For rending many albums a loop through an array of albums objects is mapped to a parent component. Album grids utilize a library called 'stonecutter' to dynamically rearrange the grid with accordance to the user's screen size.
### Audio-Player
  To play audio a 'react-player' component is fed a url from the database linking directly to cloudinary. As the component is rendered in the "App" component, it persists no matter where one navigates to on the site.
### User Uploading albums
  A user submitting music can do so via a single modal. This modal is rendered using the 'material-ui' 'Dialog' component. It has two forms in it. The first is for tracks which, upon submitting, stores the track information in the application state. Once the user has uploaded as many tracks as they want and has given the album a name and a 'cover_url' the part of the application state housing such information is submitted to the backend.
  The Album Controller then catches this bundle of data and parses it creating both the new album and new tracks for that album.

## Future Directions
  Work is not yet finished, there still is much to do!
### Better Search
  Presently the search bar at the top only searches albums. A future improvement would be to extend this into user and tracks.
### Splitting User into Followers and Artists
  Presently there is but one sort of user. Splitting the two into artists and fans would allow for more user interaction in the form of comments, follows, and likes. Metrics of the those could be taken and the result fed to users as a 'score' to incourage them to user the site more.
