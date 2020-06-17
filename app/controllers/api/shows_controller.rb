class Api::ShowsController < ApplicationController

  def new
    @show = Show.new
  end

  def index 
    @shows = Show.all
    render :index
  end

  def create 
    @show = Show.new(show_params)
    if @show.save
      render :index
    else
      render json: @show.errors.full_messages, status: 422
    end
  end

  def show
    @show = Show.find(params[:id])
  end

  def edit
    @show = Show.find(params[:id])
  end

  def update
    @show = Show.find(params[:id])
    if @show.update(show_params)
      render :show
    else
      flash.now[:errors] = @show.errors.full_messages
      render :edit
    end
  end

  def destroy
    @shows = Show.all 
    @show = Show.find(params[:id])
    @show.delete
    render :index
  end

  private

  def show_params
    params.require(:show).permit(:venue, :city, :state, :time, :charge)
  end

end