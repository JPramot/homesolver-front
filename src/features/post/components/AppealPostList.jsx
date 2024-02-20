import UsePost from "../../../hook/use-post";
import AppealPostItem from "./AppealPostItem";

export default function AppealPostList() {
  const { allAppealPost } = UsePost();
  return (
    <div>
      <div className="text-2xl font-semibold my-6 ml-[15%] text-[#A03223]">
        Appeled Posts
      </div>
      <div className="bg-[#A03232] w-[70%] mx-auto rounded-lg p-5 py-8 max-h-[700px] overflow-auto">
        {allAppealPost?.length > 0 ? (
          allAppealPost?.map((el) => (
            <AppealPostItem key={el.id} appealPost={el} />
          ))
        ) : (
          <div className="w-[90%] bg-white mx-auto rounded-md px-5 text-[#A03232] text-2xl font-semibold py-3 my-6 text-center">
            <h1>No appeal post now</h1>
          </div>
        )}
      </div>
    </div>
  );
}
