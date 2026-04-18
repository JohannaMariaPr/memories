import { useNavigate } from "react-router-dom";

export default function MemoryCard({ memory }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/memories/${memory.id}`)}
    >
      <img src={memory.cover} alt={memory.title} />
      <p>{memory.title}</p>
    </div>
  );
}