import React, { useEffect,useState } from "react";
import "./BlogCard.css"
import {Container, Row, Col, Card} from 'react-bootstrap'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from "react-router-dom";
import { postsUrl } from "../../../data";
import { EditPostForm } from './EditPostForm';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

export const BlogCardPage = ({
    isAdmin
    }) => {

    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedPost, setSelectedPost] = useState({});

    const fetchPost = (id) => {
        axios.get(postsUrl +id)
            .then((response) => {
                setPost(response.data);
                    setIsPending(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    useEffect(() => {
        fetchPost(postId);
    }, [postId])

    const deletePost = () => {
        if (window.confirm(`Видалити ${post.title}?`)) {
            setIsPending(true);

            axios.delete(`${postsUrl}${postId}`)
            .then((response) => {
                console.log('Post was deleted =>', response.data)
                fetchPost(postId)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    const editBlogPost = (updatedBlogPost) => {
        setIsPending(true);

        axios.put(`${postsUrl}${postId}`, updatedBlogPost)
        .then((response) => {
            console.log('Post changed =>', response.data)
            fetchPost(postId)
        })
        .catch((err) => {
            console.log(err)
        })
    
    };

    const handleEditFormShow = (post) => {
            setShowEditForm(true);
            setSelectedPost(post);
    }

    const handleEditFormHide= () => {
            setShowEditForm(false);
    }

    if (!post.title) return <CircularProgress className="preloader"/>
        
    const postOpacity = isPending ? 0.5 : 1

    return (
        <div className="posts"  style={{opacity: postOpacity}}>
            {showEditForm && (
                <EditPostForm
                 handleEditFormHide={handleEditFormHide}
                 selectedPost={selectedPost}
                 editBlogPost={editBlogPost}/>
                )}
            <Container style={{margin: "2% auto", width: '70%'}}>
                <Row>
                    <Card body>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        {
                            isAdmin &&(
                            <div className="postControl" style={{display: "flex"}}>
                            <div className="deletebtn" style={{ marginLeft: "auto" }}>
                                <button onClick={deletePost} type="button" class="btn btn-light">
                                    <DeleteForeverIcon/>
                                </button>
                            </div>
                            <div className="editbtn">
                                <button type="button" class="btn btn-light" onClick={() => handleEditFormShow(post)}>
                                    <EditIcon/>
                                </button>
                            </div>
                        </div>   
                            )
                        }         
                    </Card>
                </Row>
            </Container>
            {isPending && <CircularProgress className="preloader"/>}

        </div>
    )
}