import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
    handleFormSubmit = function({query}) {
        this.props.onSubmit(query);
      }    

    renderInput(field) {
        return <input placeholder='&#xf002; Search DailySmarty' {...field.input} />
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className={`search-bar-wrapper search-bar-${this.props.page}`}>
                    <Field name="query" component={this.renderInput}/>
                    <p>Press return to search</p>
                </div>
            </form>
        );
    }
}

SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;