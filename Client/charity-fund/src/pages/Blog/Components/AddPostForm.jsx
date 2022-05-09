import React, {Component} from 'react';
import {Form, Card, Button} from 'react-bootstrap';
import CancelIcon from '@mui/icons-material/Cancel';
import  './AddPostForm.css';


 export class AddPostForm extends Component {
     

    state = {
        postTitle: '',
        postDecription: '',
    };

    handlePostTitleChange= (e) => {
        this.setState({
            postTitle: e.target.value
        });
    };

    handlePostDescChange = (e) => {
        this.setState({
            postDesc: e.target.value
        });
    };

    createPost = (e) => {
        e.preventDefault()
        const post = {
            title: this.state.postTitle,
            description: this.state.postDesc,
        };

        this.props.addNewBlogPost(post)
        this.props.handleAddFormHide()
    };

    handleEscape = (e) => {
        if (e.key === "Escape") {
            this.props.handleAddFormHide();
        };
    };

    componentDidMount() {
        window.addEventListener('keyup', this.handleEscape)
    };


    componentWillUnmount() {
        window.addEventListener('keyup', this.handleEscape)
    };

    render(){
        const handleAddFormHide = this.props.handleAddFormHide;
        return(
            <div >
           
                <Form action="" className="AddPostForm">
                
                    <Button onClick={handleAddFormHide} className="hidebtn"><CancelIcon/></Button>
                    <Card.Title style={{textAlign: "center"}}>Новий пост</Card.Title>
                       

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder=" Заголовок " value={this.state.postTitle} onChange={this.handlePostTitleChange} required/>
                    </Form.Group>
       
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder=" Текст "  value={this.state.postDesc} onChange={this.handlePostDescChange} required rows={9} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.createPost}> Опублікувати </Button>
                </Form>
            </div>
        );
}
};