import React from 'react';
import { connect } from 'react-redux';
import SongForm from './SongForm';
import { editSong, removeSong } from '../actions/songs';

class EditSongPage extends React.Component {
  onSubmit = (song) => {
    this.props.editSong(this.props.song.id, song);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeSong({ id: this.props.song.id });
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

const mapStateToProps = (state, props) => ({
  song: state.songs.find((song) => song.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  editSong: (id, song) => dispatch(editSong(id, song)),
  removeSong: (data) => dispatch(removeSong(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSongPage);
