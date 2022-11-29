import { DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";

// statuses - 'idle' | 'fetching' | 'succeeded' | 'failed',
// error - string | null

const initialState = {
    messages: {},
    status: 'idle',
    error: null
}

export const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [payload.chatId]: [...state.messages[payload.chatId] || [],
                    {
                        id: `message-${Date.now()}`,
                        text: payload.text,
                        author: payload.author
                    },
                    ],

                }

            }
        }
        case DELETE_MESSAGE: {
            const newChatMessages = state.messages[payload.chatId].filter(
                ({ id }) => id !== payload.id
            );
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [payload.chatId]: newChatMessages,
                }
            }
        }
        case DELETE_CHAT: {
            const newMessages = { ...state.messages };
            delete state.messages[payload]
            return {
                ...state,
                messages: {
                    ...state.messages,
                    messages: newMessages,
                }
            }
        }
        default:
            return state;
    }
}