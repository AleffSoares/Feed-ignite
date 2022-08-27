import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1, 
    author: {
      avatarUrl: 'https://github.com/AleffSoares.png',
      name: 'Aleff Soares',
      role: 'Analista de Sistemas'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},

        {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome do projeto é Feed 🚀'},

        {type: 'link', content:'github.com/AleffSoares'},
    ],
    publishedAt: new Date('2022-08-27 12:50:00'),
  },

  {
    id: 2, 
    author: {
      avatarUrl: 'https://github.com/AleffSoares.png',
      name: 'Aleff Soares',
      role: 'Analista de Sistemas'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},

        {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome do projeto é Feed 🚀'},

        {type: 'link', content:'github.com/AleffSoares'},
    ],
    publishedAt: new Date('2022-08-20 12:50:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
           {posts.map(post => {
             return (
                <Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
             )
           })}
        </main>

      </div>
    </div>  
  );
}

export default App
