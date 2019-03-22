import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return(
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button 
                            onClick={ () => this.props.selectSong(song) } 
                            className='ui button primary'
                        >Select</button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            );
            
        })
        
    }

    render() {        
        return(
            <div className='ui divided list'>{this.renderList()}</div>
        );
    }
}
    
const mapStateToProps = (state) => {
        // re-runs with every state update
        // gets the whole state --> we pick what we want to pass along to our component as props here:
        return {songs: state.songs}
}

// connect returns a function that receives SongList as argument and passes props to it
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);