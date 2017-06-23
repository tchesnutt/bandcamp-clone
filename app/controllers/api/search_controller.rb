class Api::SearchController < ApplicationController

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

  def get_album_art(track)
    album = Album.where(id: track[:album_id])[0]
  end

  def handle_album_search(params)
    search('album', params)
  end

  def handle_track_search(params)
    search('track', params)
  end

  def handle_user_search(params)
    search('user', params)
  end

  def search(type, query)
    query_result = []
    if query == ''
      return query_result
    else
      if type == 'user'
        query_result = User.where([
          'username ILIKE :query',
          {query: "%#{params[:query]}%"}
          ]).limit(3)
      elsif type == 'album'
        query_result = Album.where([
          'title ILIKE :query',
          {query: "%#{params[:query]}%"}
          ]).limit(3)
      elsif type == 'track'
        query_result = Track.where([
          'title ILIKE :query',
          {query: "%#{params[:query]}%"}
          ]).limit(3)
      end
    end
    query_result
  end
end
