import React, {Fragment} from 'react';
import PersonCard from "../components/person-card/PersonCard";

import './List.css';
import SearchInput from "../components/search-input/SearchInput";

export const sortPeople = (a, b) => {
  if (a.lastName === b.lastName) {
    return a.firstName.localeCompare(b.firstName);
  }
  return a.lastName.localeCompare(b.lastName);
};

class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    }
  }

  _searchChanged = (e) => {
    this.setState({ searchText : e.target.value });
  };

  _filterPeople = () => {
    const { people } = this.props;
    const { searchText } = this.state;

    let filteredPeople = people;
    if (searchText) {
      filteredPeople = filteredPeople.filter(p =>
        p.lastName.indexOf(searchText) >= 0 || p.firstName.indexOf(searchText) >= 0);
    }

    return filteredPeople.sort(sortPeople);
  };

  render() {
    const { people } = this.props;
    const { searchText } = this.state;
    const sortedPeople = this._filterPeople(people);

    return (
      <Fragment>
        <SearchInput placeholder={"Chercher par nom"}
                     value={searchText}
                     onChange={this._searchChanged}
        />

        <article id={"list-people"}>
          {
            sortedPeople.map(p =>
              <PersonCard key={p.id}
                          person={p}
              />)
          }
        </article>
      </Fragment>
    );
  }
}

export default List;