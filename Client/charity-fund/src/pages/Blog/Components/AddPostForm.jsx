import React, {Component} from 'react';
import {Form, Card, Button} from 'react-bootstrap';
import CancelIcon from '@mui/icons-material/Cancel';

 export class AddPostForm extends Component {

    state = {
        postTitle: '',
        postDecription: ''
    }

    handlePostTitleChange= (e) => {
        this.setState({
            postTitle: e.target.value
        })
    }

    handlePostDescChange = (e) => {
        this.setState({
            postDesc: e.target.value
        })
    }

    createPost = (e) => {
        e.preventDefault()
        const post = {
            title: this.state.postTitle,
            description: this.state.postDesc,
            liked: false
        }
        this.props.addNewBlogPost(post)
        this.props.handleAddFormHide()
    }




    render(){
        const handleAddFormHide = this.props.handleAddFormHide;
    return(
    <div style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(1, 1,1, 0.5",
    }}>
    <Form action="" className="addPostForm"
    style={{position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            padding: "30px",
            backgroundColor: "white",
            width: "700px",
            borderRadius: "10px",
            textAlign: "center"}}>

    <Button onClick={handleAddFormHide} style={{position:"absolute", top: "4px", right: "0"}}><CancelIcon/></Button>
    <Card.Title style={{textAlign: "center"}}>Новий пост</Card.Title>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label></Form.Label>
    <Form.Control type="text" placeholder=" Заголовок " value={this.state.postTitle} onChange={this.handlePostTitleChange} required/>
    </Form.Group>
        
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
    <Form.Control as="textarea" placeholder=" Текст "  value={this.state.postDesc} onChange={this.handlePostDescChange} required rows={9} />
    </Form.Group>

    <Form.Select className="mb-3">
        <option>Вибрати категорію</option>
        <option value="posts">Пости</option>
        <option value="reports">Звіти</option>
    </Form.Select>
    <Button variant="primary" type="submit"
    onClick={this.createPost}>
    Опублікувати
    </Button>
    </Form>
     </div>
    );
}
};