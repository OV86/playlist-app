import React from 'react';
import { connect } from 'react-redux';
import setTextFilter from '../actions/filters';

class SongListFilters extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      <div className="row">
        <div className="filter-songs">
          Filter by artist:
          <input
            type="text"
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongListFilters);
