import React, {useState, useEffect} from 'react';
import "./Components/BlogContent.css"
import CircularProgress from '@mui/material/CircularProgress';
import {postsUrl} from '../../data'
import {BlogCard} from './Components/BlogCard';
import {AddPostForm} from './Components/AddPostForm'

import axios from 'axios'
import { EditPostForm } from './Components/EditPostForm';
import { useGetPosts } from '../../shared/queries';


let source;

 function BlogPage ({isAdmin}) {

    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [blogArr, setBlogArr] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [selectedPost, setSelectedPost] = useState({});
    const {data: posts, isFetching, isLoading, isError, error} = useGetPosts();
    
    if (isLoading) return <CircularProgress className="preloader"/>
    if (isError) return <h1>{error.message}</h1>

    const fetchPosts = () => {
        source = axios.CancelToken.source();
        axios.get(postsUrl, { CancelToken: source.token })
            .then((response) => {
                    setBlogArr(response.data);
                    setIsPending(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    const deletePost = (blogPost) => {
        if (window.confirm(`Видалити ${blogPost.title}?`)) {
            setIsPending(true);

            axios.delete(`${postsUrl}${blogPost.id}`)
            .then((response) => {
                console.log('Post was deleted =>', response.data)
                fetchPosts()
            })
            .catch((err) => {
                console.log(err)
            })
            

        }
    }
    const addNewBlogPost = (blogPost) => {
        setIsPending(true);

        axios.post(postsUrl, blogPost)
        .then((response) => {
            console.log('Post created =>', response.data)
            fetchPosts()
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    const editBlogPost = (updatedBlogPost) => {
        setIsPending(true);

        axios.put(`${postsUrl}${updatedBlogPost.id}`, updatedBlogPost)
        .then((response) => {
            console.log('Post changed =>', response.data)
            fetchPosts()
        })
        .catch((err) => {
            console.log(err)
        })
    
    };


    const handleAddFormShow = () => {
            setShowAddForm(true);

    }

    const handleAddFormHide = () => {
            setShowAddForm(false);

    }

    const handleEditFormShow = () => {
            setShowEditForm(true);

    }

    const handleEditFormHide= () => {
            setShowEditForm(false);

    }

    const handleSelectPost = (blogPost) => {
        setSelectedPost(blogPost);

    }


        const blogPosts = posts.map((item) => {
            return (
                <React.Fragment key={item.id}>
               <BlogCard
               title={item.title}
               description={item.description}
               deletePost={() => deletePost(item)}
               handleEditFormShow={handleEditFormShow}
               handleSelectPost={() => handleSelectPost(item)}
               isAdmin={isAdmin}
               />
               </React.Fragment>
            );
        });
        
        
        const postOpacity = isFetching ? 0.5 : 1

        return(
            <div className='blogPage'>
                {showAddForm && (
                <AddPostForm
                 blogArr={blogArr} 
                 handleAddFormHide={handleAddFormHide}
                 addNewBlogPost= {addNewBlogPost}/>
                 )}

                {showEditForm && (
                <EditPostForm 
                 handleEditFormHide={handleEditFormHide}
                 selectedPost={selectedPost}
                 editBlogPost={editBlogPost}/>
                )}

                <h1 className="HeaderBlog" style={{margin: "8% auto"}}>Статті</h1>      
                {
                    isAdmin && (
                    <div className="addNewPost">
                        <button type="button" class="btn btn-light" onClick={handleAddFormShow}>
                            Створити новий пост
                        </button>
                    </div>
                    )
                }
                

                <div className='posts' style={{opacity: postOpacity}}>
                    {blogPosts}
                    {isPending && <CircularProgress className="preloader"/>}
                </div>
            </div>
        );
      }          
export default BlogPage;


