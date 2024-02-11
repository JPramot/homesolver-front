import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import validateRegister from "../validations/validate-register";
import UseAuth from "../../../hook/use-auth";

export default function SignUpForm({ closeModal }) {
  const [input, setinput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const { register } = UseAuth();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateInputError = validateRegister(input);
      if (validateInputError) return setError(validateInputError);
      await register(input);
      toast.success("register success");
      closeModal();
    } catch (err) {
      console.log(err);
      if (err?.response.data.message === "username was used")
        return setError({ username: "username was used" });
      if (err?.response.data.message === "email was used")
        return setError({ email: "email was used" });
      toast.error("register fail");
    }
  };

  const handleOnchange = (e) => {
    setError(null);
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Input
            label={"username"}
            value={input.username}
            onChange={handleOnchange}
            placeholder={"username"}
            name={"username"}
            error={error?.username}
          />
        </div>
        <div>
          <Input
            label={"email"}
            value={input.email}
            onChange={handleOnchange}
            placeholder={"email"}
            name={"email"}
            type="email"
            error={error?.email}
          />
        </div>
        <div>
          <Input
            label={"password"}
            value={input.password}
            onChange={handleOnchange}
            placeholder={"password"}
            name={"password"}
            type="password"
            error={error?.password}
          />
        </div>
        <div>
          <Input
            label={"confirm password"}
            value={input.confirmPassword}
            onChange={handleOnchange}
            placeholder={"confirmPassword"}
            name={"confirmPassword"}
            type="password"
            error={error?.confirmPassword}
          />
        </div>
        <div className="w-[80%] mx-auto pb-6">
          <Button bg={"second"} width={"full"}>
            Sign in
          </Button>
        </div>
      </div>
    </form>
  );
}
