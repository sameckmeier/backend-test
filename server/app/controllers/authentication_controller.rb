class AuthenticationController < ApplicationController
  def authenticate_user
    user = User.find_by_email(params[:email])

    if !user || user.password != params[:password]
      render({ json: { errors: ['Invalid Email/Password'] }, status: :unauthorized })
    else
      render({
        json: {
          token: JWTProcessor.encode({ user_id: user.id }),
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          }
        }
      })
    end
  end
end
