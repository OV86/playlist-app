// set text filter action generator
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

export default setTextFilter;
