import { AUTHORS } from "../../components/Author";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessage = (chatId, text, author) => async (dispatch, getState) => {
    setTimeout(() => {
        dispatch(addBotMessage(chatId))
    }, 1000)

    dispatch({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        text,
        author
    },
})
};

export const addBotMessage = (chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        text: "Я-робот",
        author: AUTHORS.BOT
    },
})

export const deleteMessage = (chatId, id) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        id
    },
});