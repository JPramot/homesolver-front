import UseUser from "../../../hook/use-user";
import BanUser from "./BanUser";

export default function BanUserList() {
  const { bannedUsers } = UseUser();

  return (
    <div>
      <div className="text-2xl font-semibold my-6 ml-[15%] text-[#A03223]">
        <h1>Banned User</h1>
      </div>
      <div className="bg-[#A03232] w-[70%] mx-auto rounded-lg py-8 max-h-[700px] overflow-auto">
        {bannedUsers?.length > 0 ? (
          bannedUsers?.map((el) => <BanUser key={el.id} user={el} />)
        ) : (
          <div className="w-[90%] bg-white mx-auto rounded-md px-5 text-[#A03232] text-2xl font-semibold py-3 my-6 text-center">
            <h1>No banned user now</h1>
          </div>
        )}
      </div>
    </div>
  );
}
