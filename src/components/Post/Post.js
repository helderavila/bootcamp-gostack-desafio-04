import React from 'react';

import Comment from '../Comment/Comment'

import './post.css'

function Post({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <article data={post} className="list-container" key={post.id}>
          <header className="info-header">
            <img src={post.author.avatar}/>
            <div>
              <h3>{post.author.name}</h3>
              <small>{post.date}</small>
            </div>
          </header>
          <main className="content">
            <p>{post.content}</p>
          </main>
          <footer>
            <Comment comments={post.comments}/>
          </footer>
        </article>
      ))}
    </ul>
  )
}

export default Post;