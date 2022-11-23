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
            const uri = 'https://api.jsonbin.io/v3/b/637e6fa72b3499323b093cbe'
            fetch(uri) //Fetch data from local JSON file
                .then((response) => response.json())
                .then(json => {
                    commit("setPostData", json.record.Posts)
                }).catch(err => {
                console.log(err)
            })

        }
    }
})