class UsersController < ApplicationController
  before_action :authenticate_request

  def show
    render({ json: { user: @current_user }, status: 200 })
  end
end
