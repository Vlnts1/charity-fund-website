import React, { Component }from 'react';
import "./BlogContent.css"
import CircularProgress from '@mui/material/CircularProgress';

import {BlogCard} from './BlogCard';
import {AddPostForm} from './AddPostForm'
import axios from 'axios'
export class BlogContent extends Component{

    state = {
        showAddForm: false,
        blogArr: [],
        isPending: false
    }
    
    fetchPosts = () => {
        axios.get(`https://6259953d43fda1299a0ff3cf.mockapi.io/api/v1/posts/`)
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


    likePost = (blogPost) => {
       
        const temp = {...blogPost};
        temp.liked = !temp.liked

        axios.put(`https://6259953d43fda1299a0ff3cf.mockapi.io/api/v1/posts/${blogPost.id}`, temp )
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
            axios.delete(`https://6259953d43fda1299a0ff3cf.mockapi.io/api/v1/posts/${blogPost.id}`)
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
        axios.post('https://6259953d43fda1299a0ff3cf.mockapi.io/api/v1/posts', blogPost)
        .then((response) => {
            console.log('Post created =>', response.data)
            this.fetchPosts()
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
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

    handleEscape = (e) => {
        if (e.key === 'Escape' && this.state.showAddForm) {
            this.handleAddFormHide()
        }
    }
 


    componentDidMount() {
        axios.get('https://6259953d43fda1299a0ff3cf.mockapi.io/api/v1/posts')
        .then((response) => {
            this.setState({
                blogArr: response.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
        window.addEventListener('keyup', this.handleEscape)
    }
    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleEscape)
    }

      render() {
        const blogPosts = this.state.blogArr.map((item) => {
            return (
               <BlogCard
               key={item.id}
               image= {item.image}
               title={item.title}
               description={item.description}
               liked={item.liked}
               likePost={() => this.likePost(item)}
               deletePost={() => this.deletePost(item)}
               />
            );
        })
        
        if (this.state.blogArr.length === 0)
            return <h1>Завантажую данні...</h1>
        
            const postOpacity = this.state.isPending ? 0.5 : 1
        return(
            <div className='blogPage'>
                {this.state.showAddForm && (
                <AddPostForm
                 blogArr={this.state.blogArr} 
                 handleAddFormHide={this.handleAddFormHide}
                 addNewBlogPost= {this.addNewBlogPost}/>
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

