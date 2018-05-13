import React from 'react';
import { connect } from 'react-redux';
import SongListItem from './SongListItem';
import selectFilters from '../selectors/songs';
import List from 'material-ui/List';

const SongList = (props) => (
  <div className="song-list-container">
    <div className="song-list">
      <List component="nav">
        {
          props.songs.length === 0 ? ( // check if songs array empty
            <p className="no-songs-available">No songs to display. Add a song below.</p>
          ) : (
              props.songs.map((song) => {
                return <SongListItem key={song.id} song={song} />;
              })
            )
        }
      </List>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    songs: selectFilters(state.songs, state.filters)
  };
};

export default connect(mapStateToProps)(SongList);
