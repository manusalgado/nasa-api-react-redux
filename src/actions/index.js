import axios from 'axios'


export const actionsType = {
    RECEIVE_DATA: 'RECEIVE_DATA',
    ERROR: 'ERROR',
}

export const getData = () => dispatch => {

    const API_KEY = 'q6OsSmMTqLJIT5cxFFtqf0bZoUCvh9pK10Sfouqu'
    const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='

    axios
        .get(END_POINT+API_KEY)
        .then(response => {
            dispatch(receiveData(response))
        })
        .catch(error => {
            console.log(error);
            
        })

}

const receiveData = response => ({
    type: actionsType.RECEIVE_DATA,
    astronomy: response.data
})
