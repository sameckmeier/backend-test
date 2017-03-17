require 'jwt'

module JWTProcessor
  def self.method_missing?(m, *args, &block)
    res = nil

    case m.to_s
    when 'encode'
      res = JWT.encode(*args, Rails.application.secrets.secret_jwt_key)
    when 'decode'
      res = JWT.decode(*args, Rails.application.secrets.secret_jwt_key)[0]
    else
      raise ArgumentError.new("Method '#{m}' does not exist")
    end

    res
  end

  def self.respond_to_missing?(m, include_private = false)
    ['encode', 'decode'].include?(m.to_s) ? true : super
  end
end
