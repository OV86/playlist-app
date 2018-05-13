import React from 'react';
import { connect } from 'react-redux';

const Player = (props) => {
  const baseUrl = 'https://www.youtube.com/embed/';
  const firstSongId = props.songs[0] ? props.songs[0].id : '';

  const filterOutFirstElement = () => {
    if (props.songs.length <= 1) {
      return [];
    }
    return props.songs.filter((song, index) => index !== 0);
  };

  const filteredListofIds = filterOutFirstElement();
  const listOfIds = filteredListofIds.map((song) => {
    return song.id;
  });

  const idsToString = props.songs.length !== 0 ? listOfIds.join(',') : '';
  const playerUrl = `${baseUrl}${firstSongId}?playlist=${idsToString}`;

  return (
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

