import { useEffect, useState } from "react";

export default function App() {
  const [quote,setQuote] = useState("");
  // const [author,setAuthor] = useState("- Author");
const fetchQuote = async ()=>{
  try {
    const response = await fetch("http://localhost:5000/api/quotes");
    const data = await response.json();
    setQuote(data);
  } catch (error) {
    console.log("Error fetching quote : ",error);
    
  }
}
useEffect(()=>{
  fetchQuote();
},[]);
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 vw-100 bg-gradient">
      <div className="bg-white rounded-4 shadow-lg p-5 w-100" style={{ maxWidth: "600px" }}>
        {/* Heading */}
        <h1 className="h3 fw-bold text-dark mb-4 text-center">Quote Generator</h1>

        {/* Quote */}
        <p className="fs-4 text-center fw-medium text-secondary mb-3">
          {quote.quote}
        </p>

        {/* Author */}
        <p className="text-muted fst-italic mb-4 text-center">{quote.author}</p>

        {/* Button */}
        <div className="text-center">
          <button onClick={fetchQuote} className="btn btn-primary px-4 py-2 rounded-pill shadow-sm">
            Generate Quote
          </button>
        </div>
      </div>
    </div>
  );
}
