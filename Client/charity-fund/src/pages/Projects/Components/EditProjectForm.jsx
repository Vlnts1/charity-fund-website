import React, {useEffect, useState} from 'react';
import {Form, Card, Button} from 'react-bootstrap';
import CancelIcon from '@mui/icons-material/Cancel';
 
export const  EditProjectForm = (props) => {

    const [projectTitle, setProjectTitle] = useState(props.selectedProject.title);
    const [projectText, setProjectText] = useState(props.selectedProject.text);
    const [projectImage, setProjectImage] = useState(props.selectedProject.image);

    const handleProjectTitleChange= (e) => {
       
        setProjectTitle(e.target.value)
    }

    const handleProjectTextChange = (e) => {
       
        setProjectText(e.target.value)
    };

    const handleProjectImageChange = (e) => {
       
        setProjectImage(e.target.value)
    };

    const saveProject = (e) => {
        e.preventDefault()
        const project = {
            id: props.selectedProject.id,
            title: projectTitle,
            description: projectText,
            image: props.selectedProject.image,
        };
        props.editProjects(project)
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
                <Form className="editPostForm" onSubmit={saveProject}>

                    <Button onClick={handleEditFormHide} style={{position:"absolute", top: "4px", right: "0"}}><CancelIcon/></Button>
                    
                    <Card.Title style={{textAlign: "center"}}> Редагування поста </Card.Title>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control as="image" placeholder=" Редагувати " value={projectImage} onChange={handleProjectImageChange} required rows={9} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder=" Змінити заголовок " value={projectTitle} onChange={handleProjectTitleChange} required/>
                    </Form.Group>
                        
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" placeholder=" Редагувати " value={projectText} onChange={handleProjectTextChange} required rows={9} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Зберегти зміни</Button>
                </Form>
            </div>
        );
  
};