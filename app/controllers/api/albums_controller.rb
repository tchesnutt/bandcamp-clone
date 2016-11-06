class Api::AlbumsController < ApplicationController

  def create
    @album = Album.new(album_params)
    @album.artist_id = current_user.id
    if @album.save
      render 'api/albums/show'
    else
      render json: @album.errors.messages, status: 422
    end
  end

  def index
    @albums = Album.where(user_id: params[:artist_id])
    if @albums.count > 0
      render 'api/albums/index'
    else
      render json: ["Artist has no albums"], status: 404
    end
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
      render json: @album.erros.messages
    end
  end

  private

  def album_params
    params.require(:album).permit(:user_id, :title, :image_url, :description, :updated_at)
  end
end
