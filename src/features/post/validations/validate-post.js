import Joi from "joi";
import validate from "../../../utilitys/validate";

const postSchema = Joi.object({
  title: Joi.string().required().trim().message({
    "string.empty": "title is required",
    "any.required": "title is required",
  }),
  content: Joi.string().required().trim().message({
    "string.empty": "content is required",
    "any.required": "content is required",
  }),
});

const validatePost = (input) => validate(postSchema)(input);

export default validatePost;
