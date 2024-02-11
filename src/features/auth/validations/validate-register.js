import Joi from "joi";
import validate from "../../../utilitys/validate";

const registerSchema = Joi.object({
  username: Joi.string()
    .required()
    .trim()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .message({
      "string.empty": "username is required",
      "string.pattern.base": "username required at least 6 character or number",
    }),
  email: Joi.string()
    .email({ tlds: ["com"] })
    .required()
    .trim()
    .message({
      "string.empty": "invalid email address",
    }),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{8,}$/)
    .message({
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be at least 6 characters and contain only alphabet and number",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.empty": "confirm password is required",
    "any.only": "password and confirm password did not match",
  }),
});

const validateRegister = (input) => validate(registerSchema)(input);

export default validateRegister;
