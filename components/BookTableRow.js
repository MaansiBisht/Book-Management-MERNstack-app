import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; 
import axios from 'axios';
export default class BookTableRow extends Component {
    constructor(props){
        super(props)
        this.deleteBook=this.deleteBook.bind(this);
    }
    deleteBook(){
        axios.delete('http//localhost:4000/books/delete-book/'+ this.props.obj._id)
        .then((res) => {
            console.log("Book Deleted Succcesfully")
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <tr>
                <td style={{"color":"white"}}>{this.props.obj.name}</td>
                <td style={{"color":"white"}}>{this.props.obj.author}</td>
                <td style={{"color":"white"}}>{this.props.obj.quantity}</td>
                <td style={{"color":"white"}}>{this.props.obj.price}</td>
                <td style={{"color":"white"}}>{this.props.obj.date}</td>
                <td>
                    <Link className="edit-link" to={"/edit-book/" + this.props.obj._id}>
                        Edit
                    </Link>
                   <Button onClick={this.deleteBook} size="sm"  variant="info">Delete</Button>
                    
                </td>
            </tr>
        );
    }
}