import { put, takeEvery, call } from 'redux-saga/effects'
import { AUTHORS } from "../../components/Author";
import { ADD_MESSAGE, addMessage } from './actions'

const delay = time => new Promise(resolve => setTimeout(resolve, time)); //Базовая задержка со значением

// с помощью yield указываем, какие действия необходимо совершить
function* addBotMessage({ payload }) {
    if (payload.author === AUTHORS.HUMAN) {
        yield call(delay, 1000); //call - вызывает переданную функцию, 
        yield put(addMessage(payload.chatId, 'Я-робот', AUTHORS.BOT)) //put - диспатчит в стор переданный экшен
    }
}

export default function* watchAddMessage() {
    yield takeEvery(ADD_MESSAGE, addBotMessage); //указываем милдвару какие экшены необходимо перехватить, При диспатче этого экшена   будет вызвана функция-генератор addBotMessage
}