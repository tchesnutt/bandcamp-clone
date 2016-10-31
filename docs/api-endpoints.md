# API Endpoints
## HTML API
### Root
- `GET /` - loads React web app

## JSON API
### Search
- `GET /api/search`
### Users
- `POST /api/users`
- `PATCH /api/users`
### Session
- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`
### Tracks
- `GET /api/track`
  - index of all tracks
- `POST /api/track`
- `GET /api/track/:id`
- `PATCH /api/track/:id`
- `DELETE /api/track/:id`
### Albums
- `GET /api/album`
- `POST /api/album`
- `GET /api/album/:id`
- `DELETE /api/album/:id`
- `GET /api/album/:id/track`
  - index of all track for a album
