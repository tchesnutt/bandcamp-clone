json.tracks do
  json.array! @search[0], partial: "api/tracks/track", as: :track
end

json.album_art do
  json.array! @search[1], partial: "api/albums/album_search", as: :album
end

json.albums do
  json.array! @search[2], partial: "api/albums/album", as: :album
end

json.artists do
  json.array! @search[3], partial: "api/users/user", as: :user
end
