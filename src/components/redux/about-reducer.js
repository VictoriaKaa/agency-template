
let initialState = {
        aboutData: [{
            id:1,
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero eos et accusam et justo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliquyam erat. Lorem ipsum dolor sit amet. Lorem ipsum eat."
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirtempor invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero eos eaccusam et justo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliquyam erat. Loreipsum dolor sit amet. Lorem ipsum dolor et."
        }],
        aboutUs: [
            {
                id: 1,
                name: "MD. KHALIL UDDIN",
                position: "Head of Ideas",
                image:  process.env.PUBLIC_URL + "/img/man1-compressor.png"
            },
            {
                id: 2,
                name: "RUBEL MIAH",
                position: "Lead WordPress Developer",
                image:  process.env.PUBLIC_URL + "/img/man2-compressor.png"
            },
            {
                id: 3,
                name: "SHAMIM MIA",
                position: "Sr. Web Developer",
                image:  process.env.PUBLIC_URL + "/img/man3-compressor.png"
            },
            {
                id: 4,
                name: "JOHN DOE",
                position: "Front-End Developer",
                image:  process.env.PUBLIC_URL + "/img/man4-compressor.png"
            },
        ]
}

const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default aboutReducer;