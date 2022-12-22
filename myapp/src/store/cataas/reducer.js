// statuses - 'idle' | 'fetching' | 'succeeded' | 'failed',
// error - string | null

import { ADD_PICTURE, CHANGE_STATUS } from "./actions";

const initialState = {
    pictures: [],
    status: 'idle',
    error: null
}

export const cataasReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PICTURE: {
            return {
                ...state,
                pictures: [
                    ...state.pictures,
                    payload
                ],
            }
        }
        case CHANGE_STATUS: {
            return {
                ...state,
                ...payload
            }
        }
        default:
            return state;
    }
}