import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {
        posts:
            [   {
                    date: "30.10.2022",
                    body: "Thank god for coffee, otherwise this homework would never be done."
                },
                {
                    date: "12.10.2022",
                    picture: "https://www.swedishlapland.com/wp-content/uploads/800_skridskor_MLubbers-.jpg",
                    body: "What a night!!!"
                },
                {
                    "date": "10.10.2022",
                    "body": "Where can you get good sushi in Tartu?"
                },
                {
                    "date": "01.10.2022",
                    "picture": "https://i.postimg.cc/0QTQ3w64/20221007-214443.jpg",
                    "body": "graceful fuzzball"
                },
                {
                    "date": "23.09.2022",
                    "body": "Happy Autumn Equinox! Hope the longer nights will bring more parties."
                },
                {
                    "date": "13.09.2022",
                    "body": "Does anyone know what room the lab is in today?"
                },
                {
                    "date": "03.09.2022",
                    "picture": "https://s.err.ee/photo/crop/2019/10/14/697168h9a9dt46.jpg",
                    "body": "Tartu 2022"
                },
                {
                    "date": "01.09.2022",
                    "body": "Happy new school year!"
                },
                {
                    "date": "29.08.2022",
                    "body": "Can't wait to start studying again!"
                },
                {
                    "date": "23.07.2022",
                    "picture": "https://pbs.twimg.com/media/E6QlmdWX0AAtpQY?format=jpg&name=large",
                    "body": "My baby"
                }
            ],
        name: "roberta"
    },
    getters: {
        posts: state => state.posts,
        name: state => state.name
    },
    mutations: {},
    actions: {}
})