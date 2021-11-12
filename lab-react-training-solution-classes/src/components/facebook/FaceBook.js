import React from 'react';
import profilesList from '../../data/berlin.json';
const countries = profilesList.map((profile) => profile.country);
const uniqueCountries = [...new Set(countries)];
class FaceBook extends React.Component {
  state = {
    selectedCountry: '',
  };

  handleClick = (event) => {
    console.log(event.target.value);
    this.setState({ selectedCountry: event.target.value });
  };
  
  render() {
    return (
      <div className="w-100 p-5">
        <button
          onClick={(e) => this.handleClick(e)}
          className={`country-btn btn btn-outline-primary btn-sm m-1 `}
          value={''}
          style={{
            backgroundColor: this.state.selectedCountry === '' ? '#A4D2E2' : '',
          }}
        >
          All
        </button>
        {uniqueCountries.sort().map((country, idx) => (
          <button
            onClick={(e) => this.handleClick(e)}
            key={idx}
            className={`country-btn btn btn-outline-primary btn-sm m-1 `}
            value={country}
            style={{
              backgroundColor:
                this.state.selectedCountry === country ? '#A4D2E2' : '',
            }}
          >
            {country}
          </button>
        ))}
        <div className="row">
          {profilesList.map((person) => (
            <div key={person.firstName} className="col-sm-12 col-md-9 col-lg-3">
              <div
                className="card m-2"
                style={{
                  backgroundColor:
                    person.country === this.state.selectedCountry
                      ? '#A4D2E2'
                      : '',
                }}
              >
                <img
                  className="card-img-top"
                  src={person.img}
                  alt={person.firstName}
                />
                <div className="card-body">
                  <p className="card-text">
                    <strong>First name:</strong> {person.firstName}
                  </p>
                  <p className="card-text">
                    <strong>Last name: </strong>
                    {person.lastName}{' '}
                  </p>
                  <p className="card-text">
                    <strong>Country: </strong>
                    {person.country}{' '}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default FaceBook;
