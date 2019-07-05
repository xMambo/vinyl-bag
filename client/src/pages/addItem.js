import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import defaultImage from "../assets/images.png";


class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
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
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis,
        image: this.state.image
      })
        .then(res => this.loadBooks())
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
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <Input
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="image url (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
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

export default Books;
