
// add song action generator
export const addSong = (
  {
    title = '',
    artist = '',
    url = '',
    id = '',
  } = {}) =>
  (
    {
      type: 'ADD_SONG',
      song: {
        title,
        artist,
        url,
        id,
      },
    }
  );

// remove song action generator
export const removeSong = ({ id }) => ({
  type: 'REMOVE_SONG',
  id,
});

// edit song action generator
export const editSong = (id, updates) => ({
  type: 'EDIT_SONG',
  id,
  updates,
});
