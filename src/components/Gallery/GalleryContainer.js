import React from 'react';
import { connect } from 'react-redux';
import Gallery from './Gallery';


class GalleryContainer extends React.Component {
    render() {
        return (
            <div>
                <Gallery galleryData={this.props.galleryData} />
            </div>
        );
    }
}

let mapStatetoProps = (state) => ({
    galleryData: state.galleryPage.galleryData
})

export default connect(mapStatetoProps, {})(GalleryContainer)
