// action creator: simple function that returns and action object
export const selectSong = (song) => {
    // the action:
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};