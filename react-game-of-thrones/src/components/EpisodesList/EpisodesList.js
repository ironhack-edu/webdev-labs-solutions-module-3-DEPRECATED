import React from 'react';
import SingleEpisode from '../SingleEpisode/SingleEpisode';

const EpisodesList = props => {
  //   console.log('props: ', props);
  const { allEpisodes } = props;

  const list = allEpisodes.map((oneEpisode, i) => {
    // const { summary } = oneEpisode;
    // const summaryFull = summary.replace(/<p>/, '').replace(/<\/p>/, '');
    // const summaryShort = summaryFull.slice(0, 70);
    // return (
    //   <div className='col-4 mb-4' key={i}>
    //     <div className='card'>
    //       <img
    //         src={oneEpisode.image.medium}
    //         className='card-img-top'
    //         alt={oneEpisode.name}
    //       />
    //       <div className='card-body'>
    //         <h5 className='card-title'>{oneEpisode.name}</h5>
    //         <h6 className='card-title'>
    //           S{oneEpisode.season} E{oneEpisode.number}
    //         </h6>
    //         <p className='card-text'>{summaryShort} ...</p>
    //         <a href='#' className='btn btn-primary'>
    //           Go somewhere
    //         </a>
    //       </div>
    //     </div>
    //     {/* <img src={oneEpisode.image.medium} className='card-img-top' alt={oneEpisode.name}/>
    //     {oneEpisode.name} */}
    //   </div>
    // );
    return (
      <div className='col-3 mb-4' key={i}>
        <SingleEpisode episode={oneEpisode} />
      </div>
    );
  });

  return (
    <>
      <h3>All episodes</h3>
      <div className='row'>{list}</div>
    </>
  );
};

export default EpisodesList;
