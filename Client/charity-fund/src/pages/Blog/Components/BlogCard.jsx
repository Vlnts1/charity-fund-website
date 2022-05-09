import React, { useEffect,useState } from "react";
import "./BlogCard.css"
import {Container, Row, Button, Card} from 'react-bootstrap'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from "react-router-dom";
import { postsUrl } from "../../../data";
import axios from "axios";
import {ReadMoreMore} from 'read-more-more';

export const BlogCard = ({
    title,
    description,
    deletePost,
    handleEditFormShow,
    handleSelectPost,
    isAdmin
    }) => {

    const showEditForm = () => {
        handleSelectPost();
        handleEditFormShow();
    }
    const {postId} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        if (postId) {
            axios.get(postsUrl + postId)
            .then((response) => {
                    setPost(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
        }
       
    }, [postId, setPost])

    return (
        <div className="posts">
            <Container style={{margin: "2% auto", width: '70%'}}>
                <Row>
                    <Card body>

                        <h2>{postId? post.title : title}</h2>
                        <p><ReadMoreMore readMoreText="Читати..." text={postId? post.description : description} checkFor={100} /></p>

                        {
                            isAdmin &&(
                            <div className="postControl" style={{display: "flex"}}>                                
                            <div className="deletebtn" style={{ marginLeft: "auto" }}>
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
                            )
                        }         
                    </Card>
                </Row>
            </Container>
        </div>
    )
}