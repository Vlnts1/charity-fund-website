import React, {Component} from 'react';
import {Form, Card, Button} from 'react-bootstrap';
import CancelIcon from '@mui/icons-material/Cancel';
import './EditPostForm.css'
 export class EditPostForm extends Component {

    state = {
        postTitle: this.props.selectedPost.title,
        postDesc: this.props.selectedPost.description
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

    savePost = (e) => {
        e.preventDefault()
        const post = {
            id: this.props.selectedPost.id,
            title: this.state.postTitle,
            description: this.state.postDesc,
            liked: this.props.selectedPost.liked,
        };
        this.props.editBlogPost(post)
        this.props.handleEditFormHide()
    };

    handleEscape = (e) => {
        if (e.key === "Escape") {
            this.props.handleEditFormHide();
        };
    };

    componentDidMount() {
        window.addEventListener('keyup', this.handleEscape)
    };


    componentWillUnmount() {
        window.addEventListener('keyup', this.handleEscape)
    };


    render(){

        const handleEditFormHide = this.props.handleEditFormHide;
        return(
            <div>
                <Form className="editPostForm" onSubmit={this.savePost}>

                    <Button onClick={handleEditFormHide} style={{position:"absolute", top: "4px", right: "0"}}><CancelIcon/></Button>
                    
                    <Card.Title style={{textAlign: "center"}}> Редагування поста </Card.Title>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder=" Змінити заголовок " value={this.state.postTitle} onChange={this.handlePostTitleChange} required/>
                    </Form.Group>
                        
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" placeholder=" Редагувати " value={this.state.postDesc} onChange={this.handlePostDescChange} required rows={9} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={this.createPost}>Зберегти зміни</Button>
                </Form>
            </div>
        );
    };
};