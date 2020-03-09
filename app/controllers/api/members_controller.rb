class Api::MembersController < ApplicationController
  
  def index #works
    @members = Member.all 
    render json: @members
  end

  def new #works
    @member = Member.new
  end

  def create #works
    @members = Member.all
    @member = Member.new(member_params)
    if @member.save
      render :index
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
      render :index
    else
      flash.now[:errors] = @member.errors.full_messages
      render :edit
    end
  end

  def destroy
    @member = Member.find(params[:id])
    @member.delete
    render :index
  end

  private

  def member_params
    params.require(:member).permit(:name, :bio, :image)
  end

end