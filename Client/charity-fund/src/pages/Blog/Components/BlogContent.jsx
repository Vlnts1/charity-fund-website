import React, { Component }from 'react';
import "./BlogContent.css"
import CircularProgress from '@mui/material/CircularProgress';
import {postsUrl} from '../../../data'
import {BlogCard} from './BlogCard';
import {AddPostForm} from './AddPostForm'
import axios from 'axios'
import { EditPostForm } from './EditPostForm';

let source;

export class BlogContent extends Component{

    state = {
        showAddForm: false,
        showEditForm: false,
        blogArr: [],
        isPending: false,
        selectedPost: {}
    }
    
    fetchPosts = () => {
        source = axios.CancelToken.source();
        axios.get(postsUrl, { CancelToken: source.token })
            .then((response) => {
                this.setState({
                    blogArr: response.data,
                    isPending: false
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    componentDidMount() {
        this.fetchPosts();
    }

    componentWillUnmount() {
        if (source) (
            source.cancel('Axios get canceled')
        )
        
    }

    likePost = (blogPost) => {
       
        const temp = {...blogPost};
        temp.liked = !temp.liked

        axios.put(`${postsUrl}${blogPost.id}`, temp)
        .then((response) => {
            console.log('Post was changed =>', response.data)
            this.fetchPosts()

        })
        .catch((err) => {
            console.log(err)
        })
    }

    deletePost = (blogPost) => {
        if (window.confirm(`Видалити ${blogPost.title}?`)) {
            this.setState({
                isPending: true
            })
            axios.delete(`${postsUrl}${blogPost.id}`)
            .then((response) => {
                console.log('Post was deleted =>', response.data)
                this.fetchPosts()
            })
            .catch((err) => {
                console.log(err)
            })
            

        }
    }
    addNewBlogPost = (blogPost) => {
        this.setState({
            isPending: true
        })
        axios.post(postsUrl, blogPost)
        .then((response) => {
            console.log('Post created =>', response.data)
            this.fetchPosts()
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    editBlogPost = (updatedBlogPost) => {
        this.setState({
            isPending: true
        });
        axios.put(`${postsUrl}${updatedBlogPost.id}`, updatedBlogPost)
        .then((response) => {
            console.log('Post changed =>', response.data)
            this.fetchPosts()
        })
        .catch((err) => {
            console.log(err)
        })
    
    };


    handleAddFormShow = () => {
        this.setState({
            showAddForm: true
        })
    }

    handleAddFormHide = () => {
        this.setState({
            showAddForm: false
        })
    }

    handleEditFormShow = () => {
        this.setState({
            showEditForm: true
        })
    }

    handleEditFormHide= () => {
        this.setState({
            showEditForm: false
        })
    }

    handleSelectPost = (blogPost) => {
        this.setState({
            selectedPost: blogPost
        })
    }

      render() {
        const blogPosts = this.state.blogArr.map((item) => {
            return (
               <BlogCard
               key={item.id}
            //    image= {item.image}
               title={item.title}
               description={item.description}
               liked={item.liked}
               likePost={() => this.likePost(item)}
               deletePost={() => this.deletePost(item)}
               handleEditFormShow={this.handleEditFormShow}
               handleSelectPost={() => this.handleSelectPost(item)}
               />
            );
        })
        
        if (this.state.blogArr.length === 0)
            return <CircularProgress className="preloader"/>
        
            const postOpacity = this.state.isPending ? 0.5 : 1
        return(
            <div className='blogPage'>
                {this.state.showAddForm && (
                <AddPostForm
                 blogArr={this.state.blogArr} 
                 handleAddFormHide={this.handleAddFormHide}
                 addNewBlogPost= {this.addNewBlogPost}/>
                 )}

                {this.state.showEditForm && (
                <EditPostForm 
                 handleEditFormHide={this.handleEditFormHide}
                 selectedPost={this.state.selectedPost}
                 editBlogPost={this.editBlogPost}/>
                )}

                <h1 className="HeaderBlog">Статті</h1>
                <div className="addNewPost">
                    <button type="button" class="btn btn-light" onClick={this.handleAddFormShow}>
                        Створити новий пост
                    </button>
                </div>

                <div className='posts' style={{opacity: postOpacity}}>
                    {blogPosts}
                    {this.state.isPending && <CircularProgress className="preloader"/>}
                </div>
            </div>
        );
      }          
};

