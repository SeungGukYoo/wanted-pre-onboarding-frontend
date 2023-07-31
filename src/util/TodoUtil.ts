import axios from "axios";

export const PostTodo = async (todo: string) => {
  try {
    const result = await axios({
      url: "https://www.pre-onboarding-selection-task.shop/todos",
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwt_token")}`,
        "Content-Type": "application/json",
      },
      data: {
        todo,
      },
    });

    return result.data;
  } catch (err) {
    return err;
  }
};

export const GetTodo = async () => {
  try {
    const result = await axios({
      url: `https://www.pre-onboarding-selection-task.shop/todos`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
    return result.data;
  } catch (err) {}
};
export const DeleteTodo = async (id: number) => {
  try {
    await axios({
      url: `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const UpdateTodo = async (value: { id: number; todo: string; isCompleted: boolean }) => {
  try {
    const result = await axios({
      url: `https://www.pre-onboarding-selection-task.shop/todos/${value.id}`,
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwt_token")}`,
        "Content-Type": "application/json",
      },
      data: {
        todo: value.todo,
        isCompleted: value.isCompleted,
      },
    });
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
