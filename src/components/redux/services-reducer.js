
// использует dal уровень -  не нужно здесь

// action Название
let FOLLOW = 'FOLLOW';

// инициализация стейта
let initialState = {
    servicesData: [
        {
            id: 1,
            title: "CLEAN TYPOGRAPHY",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.",
            content: "typography"
        },
        {
            id: 2,
            title: "ROCK SOLID CODE",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.",
            content: "code"
        },
        {
            id: 3,
            title: "EXPERT SUPPORT",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.",
            content: "support"
        }
    ]
}

// reducer - применяет action к state
const servicesReducer = (state = initialState, action) => {
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


export default servicesReducer;