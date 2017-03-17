require 'bcrypt'

class User < ActiveRecord::Base
  has_many :events

  def self.build(params)
    params = params.clone()
    params[:password_hash] = BCrypt::Password.create(params.delete(:password))

    create(params)
  end

  def password
    @password ||= BCrypt::Password.new(password_hash)
  end
end
