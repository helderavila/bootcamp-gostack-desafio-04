import React from 'react';

import './comment.css'

function Comment({ comments }) {
  return (
    <>
      <main>
        {comments.map(comment => (
          <section className="comment-section" key={comment.id}>
            <img src={comment.author.avatar} />
            <div>
              <p><strong>{comment.author.name} </strong>{comment.content}</p>
            </div>
          </section>
        ))}
      </main>
    </>
  )
}

export default Comment;