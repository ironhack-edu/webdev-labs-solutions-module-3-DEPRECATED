import React from 'react';
import GotService from '../../services/GotService';

import Header from '../../components/Header';
import EpisodesList from '../../components/EpisodesList';
import FilterBySeason from '../../components/FilterBySeason';
import Search from '../../components/Search';

class Home extends React.Component {
  state = {
    allEpisodes: [],
    season: null,
    searchResults: []
  };

  componentDidMount() {
    GotService.getAllEpisodes()
      .then(resFromApi => {
        // console.log('res: ', resFromApi);
        this.setState({ allEpisodes: resFromApi, searchResults: resFromApi });
      })
      .catch(err => console.log(err));
  }

  filterSeason = season => {
    // console.log('season: ', season);
    // this.setState({ season: season });

    this.setState({ season });
  };

  handleSearch = searchTerm => {
    // console.log('searchTerm: ', searchTerm);

    const searchResults = this.state.allEpisodes.filter(oneEpisode =>
      oneEpisode.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({
      searchResults
    });
  };

  render() {
    // const { allEpisodes } = this.state;
    const { searchResults, season } = this.state;

    const episodesToShow = searchResults.filter(
      oneEp =>
        // this.state.season === null || Number(this.state.season) === oneEp.season
        season === null || Number(season) === oneEp.season
    );
    return (
      <>
        <Header />
        <FilterBySeason onFilterSeason={this.filterSeason} />
        <Search onHandleSearch={this.handleSearch} />
        <div className='row'>
          <div className='col-12 p-4'>
            <EpisodesList allEpisodes={episodesToShow} />
            {/* {allEpisodes.map((oneEpisode, i) => {
              return (
                <div className='col-4 mb-4' key={i}>
                  {i} - {oneEpisode.name}
                </div>
              );
            })} */}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
