
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class EditBook extends Component {
  constructor(props) {
    super(props)
    this.onChangeBookName = this.onChangeBookName.bind(this);
    this.onChangeAuthorName = this.onChangeAuthorName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state ={
        name : "",
        author: "",
        quantity:"",
        price: "",
        date: ""
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/books/edit-book/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
onChangeBookName(e){
    this.setState({name: e.target.value})
}
onChangeAuthorName(e){
    this.setState({author: e.target.value})
}
onChangeQuantity(e){
    this.setState({quantity: e.target.value})
}
onChangePrice(e){
    this.setState({price: e.target.value})
}
onChangeDate(e){
    this.setState({date : e.target.value})
}
onSubmit(e){
    e.preventDefault()
    const bookObject = {
      name: this.state.name,
      author: this.state.author,
      quantity: this.state.quantity,
      price: this.state.price,
      date: this.state.date
    }
    axios.put('http://localhost:4000/books/update-book/' + this.props.match.params.id, bookObject)
      .then((res) => {
        console.log(res.data)
        console.log('Book successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to Student List 
    this.props.history.push('/book-list')
  }

  render() {
    return(<div className='form-wrapper'>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId='Name'>
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeBookName} />
                    </Form.Group>
                    <Form.Group controlId='Author'>
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" value={this.state.author} onChange={this.onChangeAuthorName} />
                    </Form.Group>
                    <Form.Group controlId='Quantity'>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="text" value={this.state.quantity} onChange={this.onChangeQuantity}/>
                    </Form.Group>
                    <Form.Group controlId='Price'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" value={this.state.price} onChange={this.onChangePrice} />
                    </Form.Group>
                    <Form.Group controlId='Date'  style={{'padding-bottom':'30px'}}>
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" value={this.state.date} onChange={this.onChangeDate} />
                    </Form.Group>
                    <Button style={{'align':'center'}} variant="info" size="lg" block="block" type="submit">Submit</Button>
                </Form>

    </div>);
  }
}