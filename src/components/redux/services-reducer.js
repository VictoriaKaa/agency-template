
let nextId = 1;

let initialState = {
    servicesData: [
        {
            id: nextId++,
            title: "CLEAN TYPOGRAPHY",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.",
            content: "typography"
        },
        {
            id: nextId++,
            title: "ROCK SOLID CODE",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.",
            content: "code"
        },
        {
            id: nextId++,
            title: "EXPERT SUPPORT",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.",
            content: "support"
        }
    ]
}

const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default servicesReducer;