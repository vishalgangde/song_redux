//Action Creator and Named exports

export const selectSong = song => {
    //plan object creates
    return {
        type: 'SELECT_SONG',
        payload: song
    };
};