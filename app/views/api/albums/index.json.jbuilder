json.array! (@albums) do |album|
  json.id album.id
  json.title album.title
  json.cover_url album.cover_url
  json.cover_url album.cover_url
  json.description album.description
  json.description album.description
  json.created_at album.created_at
end
