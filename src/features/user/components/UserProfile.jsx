import Avartar from "../../../components/Avartar";
import Button from "../../../components/Button";
import { FaGear } from "react-icons/fa6";
import Input from "../../../components/Input";
import { useRef, useState } from "react";
import UseAuth from "../../../hook/use-auth";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";

export default function UserProfile() {
  const {
    authUser: { userProfile, username },
    updateUserProfile,
  } = UseAuth();
  const newInput = { ...userProfile };
  const profileImg = newInput.profileImage;
  delete newInput.profileImage;
  for (const key in newInput) {
    if (newInput.hasOwnProperty(key) && newInput[key] === null) {
      newInput[key] = "";
    }
  }
  if (newInput.birthDate) {
    const dateString = newInput.birthDate;
    const indexOfT = dateString.indexOf("T");
    newInput.birthDate = dateString.substring(0, indexOfT);
  }
  const [input, setInput] = useState(
    newInput !== null
      ? newInput
      : {
          firstName: "",
          lastName: "",
          alias: "",
          introduction: "",
          birthDate: "",
          gender: "",
        }
  );
  const [image, setImage] = useState(null);
  const [errorInput, setErrorInput] = useState("");
  const [loading, setLoading] = useState(false);
  const fileImageEl = useRef(null);

  const handleOnchange = (e) => {
    setInput((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (
        !input.firstName &&
        !input.lastName &&
        !input.alias &&
        !input.birthDate &&
        !input.introduction &&
        !input.gender &&
        !image
      ) {
        setErrorInput("Please fill at least one of your profile infomation");
      }
      const formData = new FormData();
      if (input.firstName) formData.append("firstName", input.firstName);
      if (input.lastName) formData.append("lastName", input.lastName);
      if (input.alias) formData.append("alias", input.alias);
      if (input.birthDate) formData.append("birthDate", input.birthDate);
      if (input.gender) formData.append("gender", input.gender);
      if (input.introduction)
        formData.append("introduction", input.introduction);
      if (image) formData.append("profileImage", image);
      setLoading(true);
      const res = await updateUserProfile(formData);

      toast.success("update profile success");
    } catch (err) {
      toast.error("update fail");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = (e) => {
    // e.stopPropagation();
    setImage(null);
    setInput(newInput);
  };
  return (
    <>
      {loading && <Spinner />}
      <div className=" bg-[#A03232] w-[60%] mx-auto rounded-lg ">
        <div className="flex flex-col w-[80%] mx-auto my-8 ">
          <div className="font-bold text-4xl py-8 text-white">
            <h1>{username} Profile</h1>
          </div>
          <div className="flex   mb-4 gap-20 w-[100%] mx-auto">
            <div>
              <Avartar
                size={10}
                src={image ? URL.createObjectURL(image) : profileImg}
              />
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
                  checked={input.gender === "male"}
                />
                <label htmlFor="male">Male</label>
                <input
                  name="gender"
                  type="radio"
                  id="female"
                  value="female"
                  onChange={handleOnchange}
                  checked={input.gender === "female"}
                />
                <label htmlFor="female">Female</label>
                <input
                  name="gender"
                  type="radio"
                  id="lgbt"
                  value="lgbt"
                  onChange={handleOnchange}
                  checked={input.gender === "lgbt"}
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
                  value={input.introduction}
                ></textarea>
              </div>
              {errorInput && (
                <small className="text-red-500">{errorInput}</small>
              )}
              <div className="w-[80%] mx-auto flex justify-end my-4 gap-4">
                <Button bg="second">Edit profile</Button>
                <Button bg="second" onClick={handleCancel} type="button">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
