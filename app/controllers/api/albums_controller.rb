class Api::AlbumsController < ApplicationController

  def create
    @album = Album.new(album_params)
    if @album.save
      render 'api/albums/show'
    else
      render json: @album.errors.messages
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
