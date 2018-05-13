import React from 'react';
import SongList from './SongList';
import AddSong from './AddSong';
import Player from './Player';

const PlaylistDashboardPage = () => {
  return (
    <div className="playlist-container">
      <Player />
      <SongList />
      <AddSong />
    </div>
  );
};

export default PlaylistDashboardPage;
