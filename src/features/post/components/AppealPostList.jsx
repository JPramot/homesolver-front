import UsePost from "../../../hook/use-post";
import AppealPostItem from "./AppealPostItem";

export default function AppealPostList() {
  const { allAppealPost } = UsePost();
  return (
    <div>
      <div className="text-2xl font-semibold">Appeled Posts</div>
      <div className="bg-[#A03232] w-[70%] mx-auto rounded-lg p-5 py-8">
        {allAppealPost?.map((el) => (
          <AppealPostItem key={el.id} appealPost={el} />
        ))}
      </div>
    </div>
  );
}
