import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Homepage</h1>
        <button onClick={() => navigate("/about")}>Contact Us</button>
        <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Home;
