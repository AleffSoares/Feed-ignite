import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
           author="Aleff Soares"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum velit a iure! Officia, minus quasi asperiores maxime porro suscipit sit ex corporis doloribus. Nam perspiciatis, corrupti explicabo eaque assumenda soluta."
          />
          <Post 
            author="Victor Soares"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </main>

      </div>
    </div>  
  );
}

export default App
