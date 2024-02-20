import { TiEdit } from "react-icons/ti";
import UseUser from "../../../hook/use-user";
import UseAuth from "../../../hook/use-auth";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "../../../components/Spinner";

export default function BanUser({ user }) {
  const { authUser } = UseAuth();
  const { unbannedUser, getAllBannedUser } = UseUser();

  const [loading, setLoading] = useState(false);

  const handleUnbannedUser = async () => {
    try {
      if (authUser.role !== "admin") return toast.error("You're not admin");
      await unbannedUser(user.id);
      getAllBannedUser();
      toast.success("Unbanned user");
      setLoading(true);
    } catch (err) {
      toast.error(err?.response?.data.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {loading && <Spinner />}
      <div className="w-[90%] bg-white mx-auto rounded-md px-5 text-[#A03232] text-xl font-light py-3 my-6 flex justify-between">
        <div className="flex gap-3">
          <h1>User</h1>
          <h1 className="font-semibold hover:text-[#a03232d5]">
            {user.username}
          </h1>
          <h1>was banned</h1>
        </div>
        <div
          className="flex items-center p-1 rounded-lg hover:bg-gray-200"
          role="button"
          onClick={handleUnbannedUser}
        >
          <TiEdit className="size-6" />
          <h1>unbanned</h1>
        </div>
      </div>
    </div>
  );
}
