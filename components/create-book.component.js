import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Component } from 'react';

export default class CreateBook extends Component{
    constructor(props) {
        super(props)
        this.onChangeAuthorName = this.onChangeAuthorName.bind(this);
        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            name : "",
            author: "",
            quantity:"",
            price: "",
            date: ""
        }
    }
    onChangeBookName(e){
        this.setState({name: e.target.value})
    }
    onChangeAuthorName(e){
        this.setState({author :e.target.value})
    }
    onChangeQuantity(e){
        this.setState({quantity :e.target.value})
    }
    onChangePrice(e){
        this.setState({price:e.target.value})
    }
    onChangeDate(e){
        this.setState({date :e.target.value})
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
        axios.post('http://localhost:4000/books/create-book',bookObject).then(res =>console.log(res.data));
        this.setState({name:'', author:'', quantity:'', price:'', date:''})
    }
    render(){
        return(
            <div className='form-wrapper'>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId='Name'>
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control  type="text" value={this.state.name} onChange={this.onChangeBookName} />
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
                    <Form.Group controlId='Date' style={{'padding-bottom':'30px'}}>
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="text" value={this.state.date} onChange={this.onChangeDate} />
                    </Form.Group>
                    <Button style={{'align':'center'}} variant="info" size="lg" block="block" type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}