import React from 'react';
import {connect} from 'react-redux';
import { selectSong } from '../action';

class SongList extends React.Component {
    //take list of songs and map our them , return
    renderList() {
        console.log(this.props);
    
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                          onClick={() => this.props.selectSong(song)}
                         >
                         Select
                         </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}
 


const mapStateToProps = state => {
    //updating our state whenever i click on the button
    console.log(state);
    return { songs : state.songs};
};

export default connect(mapStateToProps ,{selectSong})(SongList);