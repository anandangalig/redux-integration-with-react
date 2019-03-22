import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
    render() {
        console.log(this.props.selectedSong);
        if(this.props.selectedSong) {
            return(
                <div>
                    <h2>Song Detail:</h2>
                    <p>Title: {this.props.selectedSong.title}</p>
                    <p>Duration: {this.props.selectedSong.duration}</p>
                </div>
            );
        }
        return <div>Please select a song</div>
    }
}

const mapStateToProps = (state) => {    
    return { selectedSong: state.selectedSong };
}
export default connect(mapStateToProps)(SongDetail);