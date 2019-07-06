import axios from "axios";

export default {
  // Gets all albums
  getAlbums: function() {
    return axios.get("/api/albums");
  },
  // Gets the album with the given id
  getAlbum: function(id) {
    return axios.get("/api/albums/" + id);
  },
  // Deletes the album with the given id
  deleteAlbum: function(id) {
    return axios.delete("/api/albums/" + id);
  },
  // Saves a album to the database
  saveAlbum: function(albumData) {
    return axios.post("/api/albums", albumData);
  }
};


