import React from 'react';
import SongList from './SongList';
import AddSong from './AddSong';
import Player from './Player';
import SongListFilters from './SongListFilters';

const PlaylistDashboardPage = () => {
  return (
    <div className="playlist-container">
      <Player />
      <SongList />
      <SongListFilters />
      <AddSong />
    </div>
  );
};

export default PlaylistDashboardPage;
