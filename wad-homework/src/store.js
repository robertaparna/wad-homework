import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {
        posts: [],
    },
    getters: {},
    mutations: {
        setPostData(state, postData) {
            state.posts = postData.map(post => {
                return {
                    id: post.id,
                    date: post.date,
                    picture: post.picture,
                    body: post.body,
                    likes: 0,
                };
            });
        },
        likePost(state, changedPost) {
            state.posts.forEach(post => {
                if (post.id === changedPost.id) {
                    post.likes++
                }
            })
        },
        nullLikes(state) {
            state.posts.forEach(post => {
                post.likes = 0
            })
        }
    },
    actions: {
        fetchPosts ({ commit }) {
            const uri = 'http://localhost:3000/api/posts/'
            fetch(uri, { method : "GET"}) //Fetch data from local JSON file
                .then((response) => response.json())
                .then(json => {
                    console.log(json)
                    commit("setPostData", json)
                }).catch(err => {
                console.log(err)
            })

        }
    }
})