import Joi from "joi";
import validate from "../../../utilitys/validate";

const loginSchema = Joi.object({
  username: Joi.string()
    .required()
    .trim()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .message({
      "string.empty": "username is required",
      "string.pattern.base": "username required at least 6 character or number",
    }),
  password: Joi.string()
    .required()
    .trim()
    .pattern(/^[a-zA-Z0-9]{8,}$/)
    .message({
      "string.empty": "username is required",
      "string.pattern.base": "username required at least 6 character or number",
    }),
});

const validateLogin = (input) => validate(loginSchema)(input);

export default validateLogin;
