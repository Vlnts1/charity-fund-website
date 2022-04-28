import React, {useEffect, useState} from 'react';
import {Form, Card, Button} from 'react-bootstrap';
import CancelIcon from '@mui/icons-material/Cancel';
import './EditPostForm.css'
 
export const  EditPostForm = (props) => {

    const [postTitle, setPostTitle] = useState(props.selectedPost.title);
    const [postDesc, setPostDesc] = useState(props.selectedPost.description);

    const handlePostTitleChange= (e) => {
       
        setPostTitle(e.target.value)
    }

    const handlePostDescChange = (e) => {
       
        setPostDesc(e.target.value)
    };

    const savePost = (e) => {
        e.preventDefault()
        const post = {
            id: props.selectedPost.id,
            title: postTitle,
            description: postDesc,
            liked: props.selectedPost.liked,
        };
        props.editBlogPost(post)
        props.handleEditFormHide()
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                props.handleEditFormHide();
            };
        };
    window.addEventListener('keyup', handleEscape)
    return() => window.removeEventListener('keyup', handleEscape)
    }, [ props])


        const handleEditFormHide = props.handleEditFormHide;
        return(
            <div>
                <Form className="editPostForm" onSubmit={savePost}>

                    <Button onClick={handleEditFormHide} style={{position:"absolute", top: "4px", right: "0"}}><CancelIcon/></Button>
                    
                    <Card.Title style={{textAlign: "center"}}> Редагування поста </Card.Title>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder=" Змінити заголовок " value={postTitle} onChange={handlePostTitleChange} required/>
                    </Form.Group>
                        
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" placeholder=" Редагувати " value={postDesc} onChange={handlePostDescChange} required rows={9} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Зберегти зміни</Button>
                </Form>
            </div>
        );
  
};