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

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    image: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
              <h1>Books On My List</h1>
            </header>
            {this.state.books.length ? (
              <List>
              <Wrapper>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                    <div className="listImage">
                    <img src={this.state.image}></img>
                    </div>
                    
                    <div className="listBox">
                      <h4>
                        {book.title} 
                      </h4>
                        by {book.author}
                    </div>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
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

export default Books;
