import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import defaultImage from "../assets/images.png";


class AddAlbum extends Component {
  state = {
    albums: [],
    title: "",
    artist: "",
    tracks: "",
    image: "",
  };





  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.album && this.state.artist) {
      API.saveAlbum({
        title: this.state.title,
        artist: this.state.artist,
        tracks: this.state.tracks,
        image: this.state.image
      })
        .then(res => this.loadAlbums())
        .catch(err => console.log(err));
    }
  };

  render() {
    const isImgReady = this.state.image;
    let imagePreview;

    if(isImgReady) {
      imagePreview = <img src={this.state.image} alt="product "/>
    }else {
      imagePreview = <img src={defaultImage} alt="default preview"/>
    }
    return (
      <div>
          <div className="banner"></div>
          <Container fluid>

        <Row>
          <Col size="md-6">

              <h2>Add to Collection</h2>

            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Album Title (required)"
              />
              <Input
                value={this.state.artist}
                onChange={this.handleInputChange}
                name="artist"
                placeholder="Artist (required)"
              />
              <Input
                value={this.state.tracks}
                onChange={this.handleInputChange}
                name="tracks"
                placeholder="Track List (Optional)"
              />
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="image url (Optional)"
              />
              <FormBtn
                disabled={!(this.state.artist && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Album
              </FormBtn>
            </form>
          </Col>


          <Col size="md-6 sm-12">
          <div className="preview">
            {imagePreview}
            </div>
          </Col>
        </Row>
      </Container>
      </div>

    );
  }
}

export default AddAlbum;
