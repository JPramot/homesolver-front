import UseAuth from "../hook/use-auth";

export default function PostPage() {
  const { authUser } = UseAuth();
  console.log(authUser);
  return <div>PostPage</div>;
}
