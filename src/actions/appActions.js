export const ADD = "ADD";
export const DELETE = "DELETE";
export const EDIT = "EDIT";

export const addNote = ({ title, content, date }) => ({
  type: ADD,
  payload: {
    title,
    content,
    date,
    id: Math.floor(Math.random() * 12345623213),
  },
});

export const deleteRate = ({ id }) => ({
  type: DELETE,
  payload: {
    id,
  },
});
