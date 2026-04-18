import { useParams } from "react-router-dom";
import { memories } from "../data/memories";
import "../App.css";


export default function MemoryDetail() {
  const { id } = useParams();
  const memory = memories.find((m) => m.id === Number(id));

  if (!memory) return <p>Memory not found</p>;

  return (
    <div className="detail">
      <h2>{memory.title}</h2>

      <div className="images">
        {memory.images.map((img, i) => (
          <img key={i} src={img} alt="" />
        ))}
      </div>

      <p>{memory.story}</p>
    </div>
  );
}