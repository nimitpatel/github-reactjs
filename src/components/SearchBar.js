import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    state = { term: '' }

    handleInput = e => {
        this.setState({
            term: e.target.value
        })
        console.log(this.state.term);
    }
    handleSubmit = e => {
        e.preventDefault();

        this.props.onSearch(this.state.term);
    }
    render() {
        return (
            <div className="searchbar">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.term} 
                        placeholder="Enter a UserName + Press ENTER" 
                        onChange={this.handleInput} 
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;