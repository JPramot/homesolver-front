import SearchResultItem from "./SearchResultItem";

export default function SearchResultList({ result }) {
  return (
    <div className="bg-white w-[400px] left-[200px] top-[75px] flex flex-col shadow-[0_0_4px_#ddd] border-r-4 mt-2 max-h-[300px] overflow-auto absolute">
      {result?.map((item) => (
        <SearchResultItem key={item.id} item={item} />
      ))}
    </div>
  );
}
