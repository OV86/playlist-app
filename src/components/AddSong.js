import React from 'react';
import { connect } from 'react-redux';
import { addSong } from '../actions/songs';
import SongForm from './SongForm';

class AddSong extends React.Component {
  onSubmit = (song) => {
    this.props.addSong(song);
    // this.props.history.push('/');
  };
  render() {
    return (
      <div className="add-song-container">
        <SongForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSong: (song) => dispatch(addSong(song))
});

export default connect(undefined, mapDispatchToProps)(AddSong);

