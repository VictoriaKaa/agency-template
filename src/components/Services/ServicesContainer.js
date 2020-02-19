import React from 'react';
import { connect } from 'react-redux';
import Services from './Services.jsx';


class ServicesContainer extends React.Component {
    render() {
        return (
            <div>
                <Services servicesData={this.props.servicesData} />
            </div>
        );
    }
}

let mapStatetoProps = (state) => ({
    servicesData: state.servicesPage.servicesData
})

export default connect(mapStatetoProps, {})(ServicesContainer)
