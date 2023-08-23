import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [isLoading, setLoading] = useState(false);

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  } else {
    return (
     <div className="App">
       <MovieList></MovieList>
     </div>
   );
  } 
}

export default App;
