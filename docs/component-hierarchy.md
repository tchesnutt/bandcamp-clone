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
    * TrackForm

* **AlbumContainer**
  * AlbumIndex
  * TrackIndex
  * AlbumEdit
    * AlbumForm
      * TrackForm

* **ArtistContainer**
  * Profile
  * ProfilePic
  * Description
  * AlbumIndex
  * NewAlbumContainer

* **AlbumForm**
  * TrackForm

* **CurrentPlayerContainer**


* ***BONUS***

## Routes
|Path   | Component   |
|-|-|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/user/:userId" | "ArtistContainer" |
| "/user/:userId/album/:albumId/" | "AlbumContainer" |
| "/new-album" | "NewAlbumContainer" |
| "/search" | "SearchResultsContainer" |
