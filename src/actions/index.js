import {
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
} from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        // axios.get('https://api.dailysmarty.com/posts')
        axios.get('https://rosafraile.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                dispatch({
                    type: SET_RECENT_POSTS,
                //  payload: response.data.posts
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
        axios.get('https://rosafraile.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                dispatch({
                    type: SET_RESULTS_POSTS,
            //      payload: response.data.posts
                    payload: response.data.portfolio_items
                })
            })
            .catch(error => {
                console.log("fetchRecentPosts error", error)
            })
    }
}