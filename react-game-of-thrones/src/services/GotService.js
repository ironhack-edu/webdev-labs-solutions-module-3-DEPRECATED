import axios from 'axios';

const service = axios.create({
  baseURL: 'https://got-mock-api.herokuapp.com'
});

const GOT_SERVICE = {
  getAllEpisodes: () => {
    return service
      .get('/episodes')
      .then(res => res.data)
      .catch(err => console.log(`Err while getting all episodes: `, err));
  },
  getSingleEpisode: id => {
    return service
      .get(`/episodes/${id}`)
      .then(res => res.data)
      .catch(err =>
        console.log(`Err while getting one episode details: `, err)
      );
  }
};

export default GOT_SERVICE;
