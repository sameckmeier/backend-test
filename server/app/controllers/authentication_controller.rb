class AuthenticationController < ApplicationController
  def authenticate_user
    begin
      email = params[:auth][:email]
      password = params[:auth][:password]

      user = User.find_by_email(email)

      if !user || user.password != password
        raise invalid_login_msg
      else
        render({
          json: {
            jwt: JWTProcessor.encode({ user_id: user.id }),
            user: {
              id: user.id,
              first_name: user.last_name,
              last_name: user.first_name,
              email: user.email
            },
            status: 200
          }
        })
      end
    end
  rescue StandardError => e
    puts e.message
    puts e.backtrace

    if e.message == invalid_login_msg
      render({ json: { errors: [invalid_login_msg] }, status: 401 })
    else
      render({ json: { errors: ['Unable to process login request'] }, status: 400 })
    end
  end

  private
  def invalid_login_msg
    'Invalid Email/Password'
  end
end
