import UseAuth from "../hook/use-auth";

export default function AdminPage() {
  const { authUser } = UseAuth();
  return (
    <div>
      <div>Hello</div>
    </div>
  );
}
