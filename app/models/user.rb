class User < ActiveRecord::Base

  validates :username, :password_digest, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true



end
