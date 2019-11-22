
// использует dal уровень -  не нужно здесь

// action Название
let FOLLOW = 'FOLLOW';

// инициализация стейта
let initialState = {
        contactsData: [{
            id:1
        },
        {
            id: 2
        }]
}

// reducer - применяет action к state
const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state
            }
        default:
            return state;
    }
}

//action creators
// export const followSuccess = (userId) => ({ type: FOLLOW, userId }) // action creators


export default contactsReducer;