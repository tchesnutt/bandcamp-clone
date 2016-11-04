class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
    if @track.save
      render 'api/tracks/show'
    else
      render json: @track.errors.messages
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

  private

  def track_params
    params.require(:track).permit(:title, :album_id, :track_url)
  end
end
