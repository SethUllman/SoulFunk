class Api::SessionsController < ApplicationController

  def create
    @administrator = Administrator.find_by_credentials(params[:administrator][:username], params[:administrator][:password])
    if @administrator.nil?
      render json: ['Invalid username or password'], status: 401
    else
      login(@administrator)
      render 'api/admins/show'
    end
  end

  def destroy
    debugger
    if current_user
      logout
      render json: { message: 'Logout successful' }
    else
      render status: 404
    end
  end

end