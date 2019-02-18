//creates Reducers 
import { combineReducers } from 'redux';

const songReducer = () => {
    return[
        {title:'Khadi sarhad pe foj hai',duration:'4:12'},
        {title:'Vande mataram',duration:'3:76'},
        {title:'Kandho se milte hai kandhe',duration:'5:10'},
        {title:'Aisa desh hai mera',duration:'3:15'}
    ];

};

const selectedSongReducer = (selectSong = null,action) => {

        if(action.type === 'SELECT_SONG'){
            return action.payload;
        };
        return selectSong;
   
    };
export default combineReducers({
    songs: songReducer,
    selectSong : selectedSongReducer
});
