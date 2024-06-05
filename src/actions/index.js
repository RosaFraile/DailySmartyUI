import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        // axios.get('https://api.dailysmarty.com/posts')
        axios.get('https://rosafraile.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                console.log("response", response.data.portfolio_items);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.portfolio_items
                })
            })
            .catch(error => {
                console.log("fetchRecentPosts error", error)
            })
    }
}

export function fetchPostsWithQuery(query) {
    return function(dispatch) {
        //axios.get(`https://api.dailysmarty.com/search?q=${query}`)
        axios.get(`https://pokeapi.co/api/v2/berry/${query}/`)
            .then(response => {
                console.log("response", response);
             //   dispatch({
             //       type: SET_RECENT_POSTS,
             //       payload: response.data.portfolio_items
             //   })
            })
            .catch(error => {
                console.log("fetchRecentPosts error", error)
            })
    }
}