class Api::SessionsController < ApplicationController

  def create
    @administrator = Administrator.find_by_credentials(params[:administrator][:username], params[:administrator][:password])
    byebug
    if @administrator.nil?
      debugger
      render json: ['Invalid username or password'], status: 401
    else
      debugger
      login(@administrator)
      render 'api/administrators/show'
    end
  end

  def destroy
    if current_user
      logout
      render json: { message: 'Logout successful' }
    else
      render status: 404
    end
  end

end