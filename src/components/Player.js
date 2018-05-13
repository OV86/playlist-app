import React from 'react';
import { connect } from 'react-redux';

const Player = (props) => {
  const baseUrl = 'https://www.youtube.com/embed/';
  // get first song id
  const firstSongId = props.songs[0] ? props.songs[0].id : '';
  // filter out first element to generate URL correctly
  const filterOutFirstElement = () => {
    if (props.songs.length <= 1) {
      return [];
    }
    return props.songs.filter((song, index) => index !== 0);
  };
  // generate a list of song IDs
  const filteredListofIds = filterOutFirstElement().map((song) => song.id);
  // convert list to string
  const idsToString = props.songs.length !== 0 ? filteredListofIds.join(',') : '';
  // generate Youtube iframe URL
  const playerUrl = `${baseUrl}${firstSongId}?playlist=${idsToString}`;

  return (
    // return player container passing the correct URL
    <div className="player-container">
      {
        props.songs.length === 0 ?
          '' :
          (
            <div className="player">
              <iframe
                title="party-playlist"
                width="420"
                height="315"
                src={playerUrl}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )
      }
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)(Player);

