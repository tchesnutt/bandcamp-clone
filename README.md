[landing]: docs/soundcamp.gif "Landing"
[search]: docs/search.png "search"

# Sandcamp #
___

[Live](https://soundcamp.herokuapp.com/)

![alt-text][landing]

Sandcamp was started as clone of Bandcamp. Over the development process it began to take on aesthetics of my own music taste. I also added in some of the functionality of Soundcloud (mainly the persistent media player). It uses Ruby on Rails on the backend, a postgreSQL database, and React.js with Redux on the frontend.
___
## Implementation ##
Below are some explanations on the more interesting features.
#### Search

Initially I implemented search in a super hacky way: by filtering over an array of all album names. Pretty inefficient and god awful scaling. When redoing it, I wanted the results from searching at every keystroke of the user. To accomplish this I made a dedicated reducer and middleware. An event is fired at every keystroke: grabbing the value of text area and sending off to the backend where it is handled by the search controller in this function:

```Ruby
  def index
    tracks = handle_track_search(params)
    if tracks.length > 0
      albums_for_tracks = []
      tracks.each do |track|
        albums_for_tracks << get_album_art(track)
      end
    end
    @search = [ tracks, albums_for_tracks,
      handle_album_search(params),
      handle_user_search(params)]

    render 'api/search/index'
  end
```

![alt-text][search]


An example of the actual active record call:

```Ruby
  query_result = User.where([
    'username ILIKE :query',
    {query: "%#{params[:query]}%"}
    ]).limit(3)
```

As you can see I limit the results of search to three. I did the same for Albums and Tracks. Unfortunately, I didn't figure out a way to sort these results for relevancy.

### Persistent Audio Player

Implementing this was way easier then I thought going into the task. I used `ReactPlayer` which allows you to submit a url for a song and it plays.

```Javascript
<ReactPlayer
  ref={player => {
    this.player = player;
  }}
  url={ this.state.currentSong.trackUrl }
  playing={ this.state.playing }
  onProgress={ this.updatePlaybar }
  hidden={true}
  onError={e => console.log('onError', e)}/>
```

By rendering this component as child of the top most parent; it's always ready to play.
