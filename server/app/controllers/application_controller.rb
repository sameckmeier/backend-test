class ApplicationController < ActionController::API
  attr_reader :current_user

  def authenticate_request
    begin
      user_id = token_payload[:user_id]

      if user_id
        @current_user = User.find(user_id)
      else
        render({ json: { errors: ['Invalid jwt'] }, status: 401 })
      end
    rescue JWT::VerificationError, JWT::DecodeError
      render({ json: { errors: ['Invalid jwt'] }, status: 401 })
    end
  end

  private

  def token_payload
    token = request.headers['Authorization'].split(' ')
    @token_payload ||= JWTProcessor.decode(token[1]).symbolize_keys
  end
end
