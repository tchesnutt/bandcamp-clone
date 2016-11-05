class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.messages, status: 400
        end
    end

    def show
      @user = User.find(params[:id])
    end

    def index
      # TODO: pull search query out of params, us active record to find all users.
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
