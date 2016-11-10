class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
    @track.album_id = params[:album_id]
    if @track.save
      render 'api/tracks/show'
    else
      render json: @track.errors.messages, status:422
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render 'api/tracks/show'
    else
      render json: @tracks.errors.messages
    end
  end

  def index
    @tracks = Track.where(album_id: params[:album_id])
    if @tracks
      render 'api/tracks/index'
    else
      render json: ["Artist has no tracks"], status: 404
    end
  end

  def show
    @track = Track.find(params[:id])
    if @track
      render 'api/tracks/show'
    else
      render json: ["No track found"], status: 404
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :album_id, :track_url, :track_number)
  end
end
