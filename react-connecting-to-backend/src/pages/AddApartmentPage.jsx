import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddApartmentPage() {
  const [headline, setHeadline] = useState("");
  const [price, setPrice] = useState(1);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = { title: headline, pricePerDay: price };

    axios
      .post("https://ironbnb-m3.herokuapp.com/apartments", body)
      .then((response) => {
        // Reset the state
        setHeadline("");
        setPrice(1);
        navigate("/");
      });
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="headline"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />

        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button>Create Apartment</button>
      </form>
    </div>
  );
}

export default AddApartmentPage;
