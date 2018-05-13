import React from 'react';
import { connect } from 'react-redux';
import SongForm from './SongForm';
import { editSong } from '../actions/songs';

class EditSongPage extends React.Component {
  // pass song id and song object to editSong and send to home
  onSubmit = (song) => {
    this.props.editSong(this.props.song.id, song);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <SongForm
          song={this.props.song}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
// map state to props and return correct song object using param id
const mapStateToProps = (state, props) => ({
  song: state.songs.find((song) => song.id === props.match.params.id)
});
// map editSong to props
const mapDispatchToProps = (dispatch) => ({
  editSong: (id, song) => dispatch(editSong(id, song)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSongPage);
