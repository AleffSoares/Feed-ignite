import { Post } from './Post';
export function App() {

  return (
    <div>
      <Post 
        author="Aleff Soares"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum velit a iure! Officia, minus quasi asperiores maxime porro suscipit sit ex corporis doloribus. Nam perspiciatis, corrupti explicabo eaque assumenda soluta."
      />

      <Post 
        author="Victor Soares"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </div>  
  )
}

export default App
