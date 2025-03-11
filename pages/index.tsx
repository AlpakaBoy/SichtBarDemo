import { useState } from "react";
import { generatePostIdea } from ".generatePost";

export default function Home() {
  const [idea, setIdea] = useState("");

  const handleGenerate = async () => {
    const newIdea = await generatePostIdea("Reisen & Abenteuer");
    setIdea(newIdea);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Sicht-Bär 🐻</h1>
      <p className="text-xl text-gray-700">Lass dir eine KI-generierte Post-Idee geben:</p>
      
      <button onClick={handleGenerate} className="px-6 py-3 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-700">
        Idee generieren
      </button>

      {idea && (
        <div className="mt-6 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold">Deine Post-Idee:</h2>
          <p className="text-gray-800">{idea}</p>
        </div>
      )}
    </div>
  );
}
