import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Detail from "./Detail";
import Wrapper from "../components/Wrapper";

class Albums extends Component {
  state = {
    albums: [],
    title: "",
    artist: "",
    tracks: "",
    image: "",
  };

  componentDidMount() {
    this.loadAlbums();
  }

  loadAlbums = () => {
    API.getAlbums()
      .then(res =>
        this.setState({ albums: res.data, title: "", artist: "", tracks: "" })
      )
      .catch(err => console.log(err.response));
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

  deleteAlbum = id => {
    API.deleteAlbum(id)
      .then(res => this.loadAlbums())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  render() {
    return (
      <Container fluid>
        <Row>


            <header>
              <h1>Record Collection</h1>
            </header>
            {this.state.albums.length ? (
              <List>
              <Wrapper>
                {this.state.albums.map(album => (
                  <ListItem key={album._id}>
                    <Link to={"/albums/" + album._id}>
                    
                    <div className="listImage">
                    <img src= {album.image}></img>
                    </div>
                    <div className="listBox">
                      <h4>
                        {album.title} 
                      </h4>
                        by {album.artist}
                    </div>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteAlbum(album._id)} />
                  </ListItem>
                ))}
              </Wrapper>
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      <Col size="md-6 sm-12">
        
      </Col>
        </Row>
      </Container>
    );
  }
}

export default Albums;
