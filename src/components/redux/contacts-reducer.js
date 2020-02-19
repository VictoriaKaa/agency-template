
let nextId = 1;

let initialState = {
        contactsData: [{
            id: nextId++,
        },
        {
            id: nextId++,
        }]
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default contactsReducer;