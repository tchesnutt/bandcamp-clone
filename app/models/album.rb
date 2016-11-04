class Album < ActiveRecord::Base
  validates :user_id, :title, :cover_url, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :tracks,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Track
end
