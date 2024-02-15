import Avartar from "../../../components/Avartar";
import Button from "../../../components/Button";
import { FaGear } from "react-icons/fa6";
import Input from "../../../components/Input";
import { useRef, useState } from "react";
import UseAuth from "../../../hook/use-auth";

export default function UserProfile() {
  const {
    authUser: {
      userProfile: {
        firstName,
        lastName,
        alias,
        birthDate,
        introduction,
        profileImage,
      },
      username,
    },
  } = UseAuth();
  console.log("a");
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    alias: "",
    birthDate: "",
    introduction: "",
  });
  const [image, setImage] = useState(null);
  const [errorInput, setErrorInput] = useState("");
  const fileImageEl = useRef(null);

  const handleOnchange = (e) => {
    setInput((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !input.firstName &&
      !input.lastName &&
      !input.alias &&
      !input.birthDate &&
      !input.introduction &&
      !image
    ) {
      setErrorInput("Please fill at least one of input");
    }
  };
  return (
    <div className=" bg-[#A03232] w-[60%] mx-auto rounded-lg ">
      <div className="flex flex-col w-[80%] mx-auto my-8 ">
        <div className="font-bold text-4xl py-8 text-white">
          <h1>Profile</h1>
        </div>
        <div className="flex   mb-4 gap-20 w-[100%] mx-auto">
          <div>
            <Avartar size={10} src={image ? URL.createObjectURL(image) : "/"} />
            <div
              className=" relative flex justify-end bottom-6 "
              role="button"
              onClick={() => fileImageEl.current.click()}
            >
              <FaGear className="size-10 fill-white hover:fill-gray-300 " />
            </div>
          </div>
          <div className="bg-[#EEEEEE] flex-1 rounded-lg p-4">
            <div>
              <h1>username</h1>
              <h1>email</h1>
            </div>
          </div>
        </div>
        <input
          type="file"
          className="hidden"
          ref={fileImageEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              setImage(e.target.files[0]);
            }
          }}
        />
        <div className="bg-[#EEEEEE] rounded-lg my-8">
          <form onSubmit={handleSubmit}>
            <Input
              label="firstName"
              name="firstName"
              onChange={handleOnchange}
              value={input.firstName}
              placeholder={"firstname"}
            />
            <Input
              label="lastName"
              name="lastName"
              onChange={handleOnchange}
              value={input.lastName}
              placeholder={"lastname"}
            />
            <Input
              label="alias"
              name="alias"
              onChange={handleOnchange}
              value={input.alias}
              placeholder={"alias"}
            />
            <Input
              type="date"
              name="birthDate"
              onChange={handleOnchange}
              value={input.birthDate}
            />
            <div className="flex gap-4 w-[80%] mx-auto">
              <input
                name="gender"
                type="radio"
                id="male"
                value="male"
                onChange={handleOnchange}
              />
              <label htmlFor="male">Male</label>
              <input
                name="gender"
                type="radio"
                id="female"
                value="female"
                onChange={handleOnchange}
              />
              <label htmlFor="female">Female</label>
              <input
                name="gender"
                type="radio"
                id="lgbt"
                value="lgbt"
                onChange={handleOnchange}
              />
              <label htmlFor="lgbt">LGBT</label>
            </div>
            <div className="mx-auto w-[80%] my-2">
              <h1 className="my-2">Tell about your self</h1>
              <textarea
                className="w-[100%] mx-auto resize-none rounded-lg border-gray-300 focus:border-blue-500 outline-none focus:ring-2 p-2"
                rows="7"
                name="introduction"
                onChange={handleOnchange}
              ></textarea>
            </div>
            {errorInput && <small className="text-red-500">{errorInput}</small>}
            <div className="w-[80%] mx-auto flex justify-end my-4 gap-4">
              <Button bg="second">Edit profile</Button>
              <Button bg="second">Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
