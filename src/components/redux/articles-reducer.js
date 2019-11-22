
// использует dal уровень -  не нужно здесь

// action Название
let FOLLOW = 'FOLLOW';
const ADD_ARTICLE = 'ADD-ARTICLE';

// инициализация стейта
let initialState = {
        articleData: [{
            id: 1,
            title: "STARTUP IDEAS NEEDS TO BE FUNDED",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam",
            image: window.location.origin + "/img/post1.png",
            day: "12",
            month: "ОКТ."
        },
        {  id: 2,
            title: "USER INTERFACE DESIGNING ELEMENTS",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam",
            image: window.location.origin + "/img/post2.png",
            day: "17",
            month: "ОКТ."
        }],
        newArticleText: "name"
}

// reducer - применяет action к state
const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE: {
            console.log(action.newArticle)
            return {
                ...state,
                articleData: [...state.articleData, {
                    id: 3,
                    title: action.title,
                    text: action.text,
                    image: action.image,
                    day: action.day,
                    month: action.month
                }]
            }
            }
        default:
            return state;
    }
}

//action creators
export const addArticle = (newArticle, newTitle, image, day, month) =>
    ({ type: ADD_ARTICLE, text: newArticle, title: newTitle, image, day, month }) // action creators

export default articlesReducer;