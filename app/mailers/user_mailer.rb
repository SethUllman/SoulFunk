class UserMailer < ApplicationMailer
  def welcome_email
    mail(to: 'seth.ullman98@gmail.com', subject: 'Welcome to My Awesome Site')
  end
end
