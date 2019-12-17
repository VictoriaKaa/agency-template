
let initialState = {
        galleryData: [{
            id: 1,
            src: process.env.PUBLIC_URL + "/img/work1-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 2,
            src: process.env.PUBLIC_URL + "/img/work2-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 3,
            src: process.env.PUBLIC_URL + "/img/work3-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 4,
            src: process.env.PUBLIC_URL + "/img/work4-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 5,
            src: process.env.PUBLIC_URL + "/img/work5-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 6,
            src: process.env.PUBLIC_URL + "/img/work6-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 7,
            src: process.env.PUBLIC_URL + "/img/work7-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 8,
            src: process.env.PUBLIC_URL + "/img/work8-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 9,
            src: process.env.PUBLIC_URL + "/img/work9-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        }
    ]
}

// reducer - применяет action к state
const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

//action creators
// export const followSuccess = (userId) => ({ type: FOLLOW, userId }) // action creators



//thunk creators - не нужны здесь
// export const requestUsers = (page, pageSize) => {
//     return async (dispatch) => { // делает асинхронную работу и внутри куча диспатчей  
//         dispatch(toggleIsFetching(true));
//         dispatch(setCurrentPage(page));
//         let data = await usersAPI.getUsers(page, pageSize);
//         dispatch(toggleIsFetching(false));
//         dispatch(setUsers(data.items));
//         dispatch(setTotalUsersCount(data.totalCount));
//     }
// }

export default galleryReducer;