class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  attr_reader :current_user

  def authenticate_request
    begin
      user_id = token_payload[:user_id]

      if user_id
        @current_user = User.find(user_id)
      else
        render json: { errors: ['Not Authenticated'] }, status: :unauthorized
      end
    rescue JWT::VerificationError, JWT::DecodeError
      render json: { errors: ['Not Authenticated'] }, status: :unauthorized
    end
  end

  private

  def token_payload
    token = params[:headers][:Authentication].split(' ')
    @token_payload ||= JWTProcessor.decode(token[1])
  end
end
