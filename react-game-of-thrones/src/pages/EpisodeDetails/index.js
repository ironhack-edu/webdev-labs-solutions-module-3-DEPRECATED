import React from 'react';
import Moment from 'react-moment';
import { Link, Redirect } from 'react-router-dom';
import GotService from '../../services/GotService';

class EpisodeDetails extends React.Component {
  state = {
    episode: {}
  };

  componentDidMount() {
    // console.log('id: ', this.props.match.params);
    GotService.getSingleEpisode(this.props.match.params.id)
      .then(resFromApi => {
        //   console.log(resFromApi);
        this.setState({ episode: resFromApi });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { episode } = this.state;
    console.log(episode);
    const summary = episode.summary ? episode.summary.replace(/<p>/g, '').replace(/<\/p>/g, '') : '';

    const image = episode.image ? episode.image.medium : this.props.defaultImage;

    const dateToFormat = new Date(episode.airdate);

    return (
      <>
        <div className='row mb-3'>
          <div className='col-xs-12 col-sm-4'>
            <img src={image} className='imf-fluid' alt={episode.name} />
          </div>
          <div className='col-xs-12 col-sm-8'>
            <h2>{episode.name}</h2>
            <h4>
              S{episode.season} E{episode.number}
            </h4>
            <div className='text-left'>
              <p>
                <strong>Airdate</strong>: <Moment format='dddd MMMM D Y'>{dateToFormat}</Moment>
              </p>
              <p>
                <strong>Summary</strong>: {summary}
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div>
            <Link to='/'>Back to list</Link>
          </div>
        </div>
      </>
    );
  }
}

EpisodeDetails.defaultProps = {
  defaultImage: 'https://via.placeholder.com/350x197'
};

export default EpisodeDetails;
