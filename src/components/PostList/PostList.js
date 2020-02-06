import React, { Component } from 'react';

import './postlist.css';

import Post from '../Post/Post'

class PostList extends Component {
  state = {
    posts: [
      {

        id: 1,
        author: {
          name: "Helder Avila",
          avatar: "https://avatars1.githubusercontent.com/u/32720546?s=460&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content: "Diego Fernandes A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Perinazzo",
          avatar: "https://avatars2.githubusercontent.com/u/53301430?s=460&v=4"
        },
        date: "07 Jun 2019",
        content: "Fala galera, beleza?Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Helder Avila",
              avatar: "https://avatars1.githubusercontent.com/u/32720546?s=460&v=4"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          }
        ]
      },
      {

        id: 3,
        author: {
          name: "Lucas Teixeira",
          avatar: "https://avatars1.githubusercontent.com/u/50775822?s=460&v=4"
        },
        date: "14 Jun 2019",
        content: "Fala galera, beleza?Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Helder Avila",
              avatar: "https://avatars1.githubusercontent.com/u/32720546?s=460&v=4"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          }
        ]
      },
      {

        id: 3,
        author: {
          name: "Lucas Teixeira",
          avatar: "https://avatars1.githubusercontent.com/u/50775822?s=460&v=4"
        },
        date: "14 Jun 2019",
        content: "Fala galera, beleza?Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Helder Avila",
              avatar: "https://avatars1.githubusercontent.com/u/32720546?s=460&v=4"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          }
        ]
      },
    ]
  };
  render() {
    return (
      <section className="section-list">
        <Post posts={this.state.posts}/>
      </section>
    )
  }
}

export default PostList;