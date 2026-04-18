import { useState } from "react";
import { memories } from "../data/memories";
import MemoryCard from "../components/MemoryCard";
import "../App.css";


export default function Memories() {
  const [search, setSearch] = useState("");

  const filtered = memories.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="memories">
      <input
        type="text"
        placeholder="Search memories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>
    </div>
  );
}