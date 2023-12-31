import './SearchBar.css';

import React from 'react';

class SearchBar extends React.Component {
   state = {term: ''};

   submitForm = event => {
      event.preventDefault();

      this.props.onSubmit(this.state.term);
   };

   render() {
      return (
         <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.submitForm}>
               <div className="ui field">
                  <label>Video Search</label>
                  <input type="text"
                         value={this.state.term}
                         onChange={e => this.setState({term: e.target.value})}/>
               </div>
            </form>
         </div>
      )
   }
}

export default SearchBar