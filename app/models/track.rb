class Track < ActiveRecord::Base
  validates :title, :track_url, :album_id, presence: true

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album

  belongs_to :user,
    through: :album,
    source: :user
end
