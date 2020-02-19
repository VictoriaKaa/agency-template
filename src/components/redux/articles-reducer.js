
const ADD_ARTICLE = 'ADD-ARTICLE';
let nextId = 1;

let initialState = {
        articleData: [{
            id: nextId++,
            title: "STARTUP IDEAS NEEDS TO BE FUNDED",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam",
            image: process.env.PUBLIC_URL + "/img/post1-compressor.png",
            day: "12",
            month: "ОКТ."
        },
        {  id: nextId++,
            title: "USER INTERFACE DESIGNING ELEMENTS",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam",
            image: process.env.PUBLIC_URL + "/img/post2-compressor.png",
            day: "17",
            month: "ОКТ."
        }],
        newArticleText: "name"
}

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE: {
            return {
                ...state,
                articleData: [...state.articleData, {
                    id: nextId++,
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