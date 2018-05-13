import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class SongForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.song ? props.song.title : '',
      artist: props.song ? props.song.artist : '',
      url: props.song ? props.song.url : '',
      id: props.song ? props.song.id : '',
      error: '',
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onArtistChange = (e) => {
    const artist = e.target.value;
    this.setState(() => ({ artist }));
  };

  onUrlChange = (e) => {
    const url = e.target.value;
    // script src https://gist.github.com/takien/4077195
    const getYouTubeId = (urlToParse) => {
      urlToParse = urlToParse.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      return undefined !== urlToParse[2] ? urlToParse[2].split(/[^0-9a-z_\-]/i)[0] : urlToParse[0];
    };

    const id = getYouTubeId(url);

    if (id === undefined) {
      this.setState(() => ({ error: 'Sorry, this URL cannot be used.' }));
    } else {
      this.setState(() => ({ url, id }));
    }
  };

  onSubmit = (e) => {
    // prevent the default page reload behaviour on submit
    e.preventDefault();
    // check if url and id exist. If not display error
    if (!this.state.url && !this.state.id) {
      this.setState(() => ({ error: 'Please provide a Youtube URL.' }));
    } else {
      this.setState(() => ({ error: '' }));

      this.props.onSubmit({
        title: this.state.title,
        artist: this.state.artist,
        url: this.state.url,
        id: this.state.id,
      });
      // reset form fields to empty string
      this.state.title = '';
      this.state.artist = '';
      this.state.url = '';
    }
  };

  render() {
    return (
      <div className="song-form">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <TextField
            type="text"
            className="form-title"
            name="title"
            value={this.state.title}
            onChange={this.onTitleChange}
            helperText="Required"
            autoFocus
            placeholder="Song title"
            required
          />
          <TextField
            type="text"
            className="form-artist"
            name="artist"
            value={this.state.artist}
            onChange={this.onArtistChange}
            helperText="Optional"
            placeholder="Artist"
          />
          <TextField
            type="text"
            className="form-url"
            name="url"
            value={this.state.url}
            onChange={this.onUrlChange}
            helperText="Required"
            placeholder="Youtube URL"
            required
          />
          <Button type="submit" className="add-new-song" variant="raised">
            Add song
          </Button>
        </form>
      </div>
    );
  }
}

export default SongForm;

