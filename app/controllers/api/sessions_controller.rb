class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render "api/user/show"
    else
      render json: {password: ["you're bullshit"], username: ["lol uwdd"]}, status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: {}, status: 404
    end
  end
end
