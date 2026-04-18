import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img
        src="/images/hero.jpeg"
        alt="us"
        className="hero"
      />

      <h1>One year with you 🤍</h1>
      <p>A little place for our memories.</p>

      <button onClick={() => navigate("/memories")}>
        Open Memories
      </button>
    </div>
  );
}