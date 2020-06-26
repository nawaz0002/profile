import React, {useEffect, useState} from 'react';
import './App.css';
import data from './assets/data.json'
import Posts from './components/Posts'
import {v4 as uuidv4 } from 'uuid'
import Pagination from './components/Pagination';
// import Post from './components/Post'

function App() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3)

  useEffect(() => {
    // console.log(data)
    setPosts(data)
    if(!localStorage.getItem('id')){
      const id = uuidv4();
      localStorage.setItem('id', id)
    }
  }, [])

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="">      
      <Posts postsData={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
