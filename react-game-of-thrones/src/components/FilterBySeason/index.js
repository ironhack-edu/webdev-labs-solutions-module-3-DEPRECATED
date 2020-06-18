import React from 'react';

// props.onFilterSeason
const FilterBySeason = ({ onFilterSeason }) => {
  return (
    <div className='mb-4'>
      <h6>Filter season</h6>

      <div className='btn-group' role='group'>
        {[null, 1, 2, 3, 4, 5, 6, 7, 8].map(season => (
          <button
            className='btn btn-secondary'
            key={season}
            onClick={() => {
              onFilterSeason(season);
            }}
          >
            {season ? `S0${season}` : 'All'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBySeason;
