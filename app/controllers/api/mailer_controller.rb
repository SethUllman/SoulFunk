class Api::MailerController < ApplicationController
  def create
    @message = mailer_params
    user_mailer.welcome_email(@message).deliver_now
  end

  private

  def mailer_params
    params.require(:mailer).permit(:title, :email, :body)
  end
end