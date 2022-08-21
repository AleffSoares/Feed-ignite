import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post() {
  return (
      <article className={styles.post}>
          <header>
            <div className={styles.author}>
              <img className={styles.avatar} src="https://github.com/AleffSoares.png" alt="" />
              <div className={styles.authorInfo}>
                  <strong>Aleff Soares</strong>
                  <span>Analista de Sistemas</span>
              </div>
            </div>

            <time title='21 de Agosto às 14:56h' dataTime="2022-08-21 14:55:30">Publicado há 1h</time>
          </header>

          <div className={styles.content}>
               <p>Fala galeraa 👋</p> 

               <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome do projeto é Feed 🚀</p> 

               <p><a href="">github.com/AleffSoares</a></p> 

               <p>
                  <a href="">#novoprojeto </a> {' '}
                  <a href="">#ignite</a> {' '}
                  <a href="">#rocketseat</a> 
               </p> 
          </div>

          <form className={styles.commentForm}>
              <strong>Deixe seu feedback</strong>

              <textarea  
                placeholder="Deixe um comentário"
              />

              <footer>
                <button type="submit">Publicar</button>
              </footer>
          </form>

          <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
          </div>
      </article>
  );
}