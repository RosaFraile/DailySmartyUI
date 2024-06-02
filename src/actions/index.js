import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get('https://rosafraile.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                console.log("response", response.data.portfolio_items);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data.portfolio_items
                })
            })
            .catch(error => {
                console.log("fetccRecentPosts error", error)
            })
    }
}