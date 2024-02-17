import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import validateLogin from "../validations/validate-login";
import UseAuth from "../../../hook/use-auth";
import { toast } from "react-toastify";

export default function SignInForm({ closeModal }) {
  const [input, setInput] = useState({ username: "", password: "" });
  const [error, setError] = useState({});

  const { login } = UseAuth();

  const handleOnchange = (e) => {
    setInput((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateLoginError = validateLogin(input);
      if (validateLoginError) return setError(validateLoginError);
      const res = await login(input);
      console.log(res);
      toast.success("login success");
      // closeModal();
    } catch (err) {
      console.log(err);
      toast.error(err?.response.data.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          label="usernameLogin"
          name="username"
          placeholder="username"
          value={input.username}
          onChange={handleOnchange}
          error={error?.username}
        />
      </div>
      <div>
        <Input
          label="passwordLogin"
          name="password"
          placeholder="password"
          value={input.password}
          onChange={handleOnchange}
          error={error?.password}
        />
      </div>
      <div className="w-[80%] mx-auto pb-6">
        <Button bg={"second"} width={"full"} type="submin">
          Log in
        </Button>
      </div>
    </form>
  );
}
