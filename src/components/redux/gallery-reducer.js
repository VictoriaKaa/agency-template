
let initialState = {
        galleryData: [{
            id: 1,
            src: window.location.origin + "/img/work1.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 2,
            src: window.location.origin + "/img/work2.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 3,
            src: window.location.origin + "/img/work3.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 4,
            src: window.location.origin + "/img/work4.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 5,
            src: window.location.origin + "/img/work5.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 6,
            src: window.location.origin + "/img/work6.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 7,
            src: window.location.origin + "/img/work7.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 8,
            src: window.location.origin + "/img/work8.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: 9,
            src: window.location.origin + "/img/work9.png",
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