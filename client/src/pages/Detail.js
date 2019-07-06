import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    album: {}
  };
  // When this component mounts, grab the album with the _id of this.props.match.params.id
  // e.g. localhost:3000/albums/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getAlbum(this.props.match.params.id)
      .then(res => this.setState({ album: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">

          <img src={this.state.album.image}>
          </img>
          </Col>
          <Col size="md-6">
          
            <Jumbotron>
              <h1>
                {this.state.album.title} by {this.state.album.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <article>
              <h1>Tracks</h1>
              <p>
                {this.state.album.tracks}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
