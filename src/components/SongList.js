import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render() {
        return(
            <div>SongList</div>
        );
    }
}

// connect returns a function thats receiving SongList as argument
export default connect()(SongList);