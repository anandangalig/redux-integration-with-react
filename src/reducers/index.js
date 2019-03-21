import  { combineReducers } from 'redux';

// reducers provide the state
const songsReducer = () => {
    return [
        {title: 'Waterfalls', duration: '4:05'},
        {title: 'Still Ballin', duration: '4:10'},
        {title: 'C.R.E.A.M.', duration: '3:45'},
        {title: 'Hit \'Em Up', duration: '4:00'},
    ];
}

// some action might be performed
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});