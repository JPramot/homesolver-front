import { ToastContainer, Slide } from "react-toastify";
import Router from "./route/Index";
import UseAuth from "./hook/use-auth";
import Spinner from "./components/Spinner";
import PostContextProvider from "./features/post/context/PostContext";

function App() {
  const { loading } = UseAuth();
  if (loading) return <Spinner />;
  return (
    <>
      <PostContextProvider>
        <Router />
      </PostContextProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        transition={Slide}
      />
    </>
  );
}

export default App;
