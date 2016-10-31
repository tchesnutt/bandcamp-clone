## Component Hierarchy

* **AuthContainer**
  * AuthForm

* **HomeContainer**
  * NaveBar
    * Search
  * ExporeMusic
  * NewAlbumContainer

* **SearchResultsContainer**
  * Search
  * TrackIndex
  * AlbumIndex
  * UserIndex

* **NewAlbumContainer**
  * AlbumForm

* **AlbumContainer**
  * AlbumIndex
  * AlbumEdit
    * AlbumForm
  * Player
  * TrackIndex

* **ArtistContainer**
  * Profile
  * ProfilePic
  * Description
  * AlbumIndex

* **ProfileContainer**
  * EditUserForm
  * NewAlbumContainer

* **AlbumForm**
  * TrackForm



* ***BONUS***

## Routes
|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/user/:userId" | "ArtistContainer" |
| "/user/:userId/me" | "ProfileContainer" |
| "/user/album/:albumId/" | "AlbumContainer" |
| "/new-album" | "NewAlbumContainer" |
| "/search" | "SearchResultsContainer" |
