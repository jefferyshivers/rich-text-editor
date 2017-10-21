class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def show
    render json: { user: current_user }
  end
end