import React from 'react';
import { connect } from 'react-redux';
import About from './About';


class AboutContainer extends React.Component {
    render() {
        return (
            <div>
                <About aboutData={this.props.aboutData} aboutUs={this.props.aboutUs} />
            </div>
        );
    }
}

let mapStatetoProps = (state) => ({
    aboutData: state.aboutPage.aboutData,
    aboutUs: state.aboutPage.aboutUs
})

export default connect(mapStatetoProps, {})(AboutContainer)
