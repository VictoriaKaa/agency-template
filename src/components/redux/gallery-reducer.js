
let nextId = 1;

let initialState = {
        galleryData: [{
            id: nextId++,
            src: process.env.PUBLIC_URL + "/img/work1-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: nextId++,
            src: process.env.PUBLIC_URL + "/img/work2-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: nextId++,
            src: process.env.PUBLIC_URL + "/img/work3-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: nextId++,
            src: process.env.PUBLIC_URL + "/img/work4-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: nextId++,
            src: process.env.PUBLIC_URL + "/img/work5-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: nextId++,
            src: process.env.PUBLIC_URL + "/img/work6-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: nextId++,
            src: process.env.PUBLIC_URL + "/img/work7-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: nextId++,
            src: process.env.PUBLIC_URL + "/img/work8-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        },
        {
            id: nextId++,
            src: process.env.PUBLIC_URL + "/img/work9-compressor.png",
            title: "Hair Dresser",
            message: "Branding"
        }
    ]
}

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default galleryReducer;