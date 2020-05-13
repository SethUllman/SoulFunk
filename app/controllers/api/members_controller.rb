class Api::MembersController < ApplicationController
  
  def index
    @members = Member.all 
    render :index
  end

  def show
    @member = Member.find(params[:id])
  end

  def new
    @member = Member.new
  end

  def create
    @member = Member.new(member_params)
    if @member.save
      render :show
    else
      render json: @member.errors.full_messages, status: 422
    end
  end

  def edit
    @member = Member.find(params[:id])
  end

  def update 
    @member = Member.find(params[:id])
    if @member.update(member_params)
      render :show
    else
      flash.now[:errors] = @member.errors.full_messages
      render :edit
    end
  end

  def destroy
    @members = Member.all
    @member = Member.find(params[:id])
    @member.delete
    render :index
  end

  private

  def member_params
    params.require(:member).permit(:name, :bio, :member_photo)
  end

end