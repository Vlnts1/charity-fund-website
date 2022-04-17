import React from "react";
import "./BlogCard.css"
import {Container, Row, Col} from 'react-bootstrap'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

export const BlogCard = ({
    image,
    title,
    description,
    liked,
    likePost,
    deletePost,
    handleEditFormShow,
    handleSelectPost
}) => {

    const showEditForm = () => {
        handleSelectPost();
        handleEditFormShow();
    }
    const heartFill =  liked ? 'crimson' : 'black'
    

    return (
        <div className="posts">
    <Container>
        <Row>
            <Col><img src={image}></img></Col>
            <Col xs={6}><h2>{title}</h2>
                    <p>{description}</p>
                    <button onClick={likePost} type="button" class="btn btn-light">
                        <FavoriteIcon  style={{fill: heartFill}}/>
                    </button></Col>
            <Col> 
                <div className="postControl">
                    <div className="deletebtn">
                            <button onClick={deletePost} type="button" class="btn btn-light">
                                <DeleteForeverIcon/>
                            </button>
                    </div>
                    <div className="editbtn">
                            <button type="button" class="btn btn-light" onClick={showEditForm}>
                                <EditIcon/>
                            </button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
    )
}