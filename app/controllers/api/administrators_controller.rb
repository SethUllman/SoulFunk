class Api::AdministratorsController < ApplicationController
  def create
    @user = Administrator.new(user_params)
    debugger
    if @user.save
      login(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end