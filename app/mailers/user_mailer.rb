class UserMailer < ApplicationMailer
  def welcome_email

    @message = @message

    mail(to: 'seth.ullman98@gmail.com', subject: 'Message from a Fan')
  end
end
