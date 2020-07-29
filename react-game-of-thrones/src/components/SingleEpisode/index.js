import React from 'react';

import { Link } from 'react-router-dom';

class SingleEpisode extends React.Component {
  state = {
    showFull: false
  };

  readMore = () => this.setState({ showFull: !this.state.showFull });

  render() {
    const { episode } = this.props;
    const { summary } = episode;
    const summaryFull = summary.replace(/<p>/g, '').replace(/<\/p>/g, '');
    // console.log(summaryFull);
    const summaryShort = summaryFull.slice(0, 70);
    return (
      //   <div className='col-4 mb-4' key={i}>
      <div className='card'>
        <Link to={`/episodes/${episode.id}`}>
          <img src={episode.image.medium} className='card-img-top' alt={episode.name} />
        </Link>
        <div className='card-body'>
          <h5 className='card-title'>{episode.name}</h5>
          <h6 className='card-title'>
            S{episode.season} E{episode.number}
          </h6>
          <p className='card-text'>{this.state.showFull ? summaryFull : summaryShort}</p>
          <a href='#' className='card-link' onClick={this.readMore}>
            {this.state.showFull ? 'Read Less' : 'Read More'}
          </a>
        </div>
      </div>
      // <img src={oneEpisode.image.medium} className='card-img-top' alt={oneEpisode.name}/>
      // {oneEpisode.name}
      // </div>
    );
  }
}

export default SingleEpisode;
