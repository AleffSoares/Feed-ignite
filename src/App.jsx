import { Post } from './Post';
import { Header } from './components/Header';


import './global.css';
export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Aleff Soares"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum velit a iure! Officia, minus quasi asperiores maxime porro suscipit sit ex corporis doloribus. Nam perspiciatis, corrupti explicabo eaque assumenda soluta."
      />
      <Post 
        author="Victor Soares"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </div>  
  );
}

export default App
