
export const ADD_PICTURE = "CATAAS::ADD_PICTURE";
export const CHANGE_STATUS = "CATAAS::CHANGE_STATUS";

export const getCatPictures = () => async (dispatch) => {
     dispatch({
        type: CHANGE_STATUS,
        payload: {
            status: 'fetching'
        }
    })
    try { // в блок try/catch оборачиваем наш запрос, если вернется статус 40x или 50x, то в блоке catch сможем отловить и вывести ошибку
        const response = await fetch('https://cataas.com/cat') // через фетч запрашиваем данные с апишки в виде https://{host}/{uri}

        const image = await response.blob() // конвертируем полученную картинку из респонса в блоб(набор символов)
    
        dispatch({
            type: ADD_PICTURE,
            payload: URL.createObjectURL(image) // создаем из набора символов локальную ссылку, которую сможем вывести в теге img
        })
        dispatch({
            type: CHANGE_STATUS,
            payload: {
                status: 'success'
            }
        })
    } catch(e) {
        console.log(e)
        dispatch({
            type: CHANGE_STATUS,
            payload: {
                status: 'error',
                error: 'Произошка какая-то ошибка!'
            }
        })
    }
};