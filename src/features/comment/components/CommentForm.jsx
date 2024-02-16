import Avartar from "../../../components/Avartar";
import Button from "../../../components/Button";
import UseAuth from "../../../hook/use-auth";

export default function CommentForm() {
  const { authUser } = UseAuth();
  return (
    <div>
      <div>
        <textarea
          className="w-full rounded-lg resize-none outline-none focus:border-4 focus:border-[#A03232] p-3"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div className="flex justify-end gap-4 items-center my-4">
          <Avartar size="3" src={authUser?.userProfile.profileImage} />
          <h1>{authUser?.userProfile.alias || "Unknown"}</h1>
          <Button bg="main">Cancel</Button>
          <Button bg="main">Comment</Button>
        </div>
      </div>
    </div>
  );
}
