// get visible songs
const getVisibleSongs = (songs, {
  text
}) => {
  return songs.filter((song) => {
    const textMatch = song.artist.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  });
};

export default getVisibleSongs;
