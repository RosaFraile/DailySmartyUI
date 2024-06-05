import React, { Component } from 'react';

import { connect } from 'react-redux';
import Post from './post';

class ResultsPosts extends Component {
    renderPosts() {
        console.log("results posts", this.props.posts);
        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} {...post} />
        })
        return posts;
    }

    render() {
        return (
            <div className='results-posts'>
                <div className='resuls-posts-wrapper'>
                    <ul className='results-posts-posts'>
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("paso por aqui");
    return {
        posts: state.posts.resultsPosts
    }
}

export default connect(mapStateToProps)(ResultsPosts);