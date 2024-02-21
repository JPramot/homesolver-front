import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";

export default function SearchContainer() {
  const [result, setResult] = useState([]);

  return (
    <div className="w-[400px] flex flex-col items-center rounded-lg">
      <SearchBar setResult={setResult} />
      <SearchResultList result={result} />
    </div>
  );
}
