class Api::AlbumsController < ApplicationController

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    tracks = params[:album][:tracks]
    if @album.save
      tracks.each do |idx, track|
        title = track["title"]
        track_url = track["track_url"]
        album_id = @album.id
        track_numb = idx.to_i + 1
        Track.create(title: title, track_url: track_url, album_id: album_id, track_number: track_numb)
        render 'api/albums/index'
      end
    else
      render json: @album.errors.messages, status: 422
    end
  end

  def index
    if params[:artist_id]
      @albums = Album.where(user_id: params[:artist_id])
      if @albums
        render 'api/albums/index'
      else
        render json: ["Artist has no albums"], status: 404
      end
    elsif params[:search]
      @albums = [handle_track_search(params),
                handle_album_search(params),
                handle_user_search(params)]
    else
      @albums = Album.all
      if @albums
        render 'api/albums/index'
      else
        render json: ['No Albums Found, Panic'], status: 404
      end
    end
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
          'title ILIKE :query',
          {query: "%#{params[:search]}%"}
          ]).limit(3)
      elsif type == 'album'
        query_result = Album.where([
          'title ILIKE :query',
          {query: "%#{params[:search]}%"}
          ]).limit(3)
      elsif type == 'track'
        query_result = Track.where([
          'title ILIKE :query',
          {query: "%#{params[:search]}%"}
          ]).limit(3)
      end
    end
    query_result
  end

  def show
    @album = Album.find(params[:id])
    if @album
      render 'api/albums/show'
    else
      render json: ["No album found"], status: 404
    end
  end

  def update
    @album = Alubm.find(params[:id])
    if @album.update(album_params)
      render 'api/albums/show'
    else
      render json: @album.errors.messages
    end
  end

  private

  def album_params
    params.require(:album).permit(:user_id, :title, :cover_url, :description, :updated_at, :tracks)
  end
end
