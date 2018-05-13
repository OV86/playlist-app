import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeSong } from '../actions/songs';
import { ListItem } from 'material-ui/List';
import Button from 'material-ui/Button';

const SongListItem = (props) => {
  const onRemove = () => {
    props.removeSong({ id: props.song.id });
  };

  return (
    <div className="song-list-item">
      <ListItem button>
        <div className="song-title">
          <Link className="link-btn" to={`/edit/${props.song.id}`}>{props.song.title}</Link>
        </div>
        <div className="song-artist">
          {props.song.artist}
        </div>
        <Button className="remove-btn" onClick={onRemove} variant="raised">
          Remove
        </Button>
      </ListItem>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeSong: (song) => dispatch(removeSong(song))
});

export default connect(undefined, mapDispatchToProps)(SongListItem);
