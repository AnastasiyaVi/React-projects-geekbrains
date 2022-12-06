import { database } from "../../services/firebase";

export const SET_CHATS = "CHATS::SET_CHATS";

export const addChat = (name) => async (dispatch, getState) => {
  const chats = getState().chat.chats;
  const id = "chat-" + Number(chats.length + 1);

  database.ref("chats").child(id).set({
    id,
    name,
  });
};

export const deleteChat = (id, cb) => async () => {
  database.ref("chats").child(id).remove();
  database
    .ref("messages")
    .orderByChild("chatId")
    .equalTo(id)
    .ref.remove(() => {
      cb();
    }); //удаляем все сообщения, сравнивая chatId сообщения с удаляемым айди чата
};

export const getChatsFromFirebase = () => async (dispatch) => {
  let chats = [];

  database.ref("chats").on("value", (snapshot) => {
    snapshot.forEach((item) => {
      chats.push(item.val());
    });

    dispatch({
      type: SET_CHATS,
      payload: chats,
    });
    chats = [];
  });
};
