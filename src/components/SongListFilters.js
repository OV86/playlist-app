import React from 'react';
import { connect } from 'react-redux';
import setTextFilter from '../actions/filters';
import TextField from 'material-ui/TextField';

class SongListFilters extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      // don't display filter if no songs added
      <div className="filter-songs">

        {
          this.props.songs.length === 0 ? (
            '') : (
              <div className="filter-container">
                <TextField
                  type="text"
                  className="artist-filter"
                  name="filter"
                  onChange={this.onTextChange}
                  value={this.props.filters.text}
                  placeholder="Filter by artist"
                />
              </div>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    songs: state.songs
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongListFilters);
