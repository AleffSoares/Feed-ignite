import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/AleffSoares.png" alt="" />

      <div className={styles.commentBox}>
          <div className={styles.commentContent}>
              <header>
                  <div className={styles.authorAndTime}>
                      <strong>Aleff Soares</strong>
                      <time title='21 de Agosto às 14:56h' dataTime="2022-08-21 14:55:30">Cerca de 1h atrás</time>
                  </div>

                  <button title="Deletar comentário">
                      <Trash size={20} />
                  </button>
              </header>

              <p>Muito bom Devon, parabéns!! </p>
          </div>

          <footer>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </footer>
      </div>
    </div>
  );
}