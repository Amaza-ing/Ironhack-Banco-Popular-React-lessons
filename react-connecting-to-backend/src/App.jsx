import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import axios from "axios";
 
import Navbar from "./components/Navbar";
import ApartmentsPage from "./pages/ApartmentsPage";
import AddApartmentPage from "./pages/AddApartmentPage";
 
function App() {

  useEffect(() => {
    // THIS IS JUST AN EXAMPLE TO USE THE CORS IN THE BACKEND
    axios
      .get("http://localhost:8080/api/courses")
      .then((response) => console.log(response.data))
  }, [])

  return (
    <div className="App">
      <Navbar />
 
      <Routes>
        <Route path="/" element={<ApartmentsPage />} />
        <Route path="/apartments/new" element={<AddApartmentPage />} />
      </Routes>
    </div>
  );
}
 
export default App;