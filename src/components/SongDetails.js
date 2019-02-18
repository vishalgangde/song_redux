import React from 'react';
import { connect } from 'react-redux';

const SongDeatils = ({ song }) => {
    if(!song){
        return<div>Select a Song!</div>;
    }
    
    return(
        <div>
            <h2>Details For:</h2>
            <p>
                Title : {song.title}
                <br></br>
                Duration : {song.duration}
            </p>
        </div>
    );
    
};


const mapStateToProps = state => {
    //selected songs details
    return {song: state.selectSong}
};

export default connect(mapStateToProps)(SongDeatils);