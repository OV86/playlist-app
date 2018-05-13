// songs reducer
const songsReducerDefaultState = [];

const songsReducer = (state = songsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.song]; // adds a new item and returns a new array
    case 'REMOVE_SONG':
      return state.filter(song => song.id !== action.id);
    case 'EDIT_SONG':
      return state.map((song) => {
        if (song.id === action.id) {
          return {
            ...song,
            ...action.updates,
          };
        }
        return song;
      });
    default:
      return state;
  }
};

export default songsReducer;

