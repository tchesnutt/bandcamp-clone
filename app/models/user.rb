class User < ActiveRecord::Base
    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 3 }
    validates :password, length: { minimum: 6 }, allow_nil: :true

    has_many :albums,
             primary_key: :id,
             foreign_key: :user_id,
             class_name: :album

    has_many :tracks,
             through: :albums,
             source: :tracks

    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        return nil unless @user
        @user.is_password?(password) ? @user : nil
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(32)
        save!
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(32)
    end
end
