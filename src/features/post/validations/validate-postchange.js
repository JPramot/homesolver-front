export const isPostChange = (input, newinput) => {
  if (input.title == newinput.title && input.content == newinput.content)
    return false;
  else return true;
};
