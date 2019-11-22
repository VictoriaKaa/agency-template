import React from 'react';
import { connect } from 'react-redux';
import Contacts from './Contacts';


class ContactsContainer extends React.Component {
    render() {
        return (
            <div>
                <Contacts contactsData={this.props.contactsData} />
            </div>
        );
    }
}

let mapStatetoProps = (state) => ({
    contactsData: state.contactsPage.contactsData
})

export default connect(mapStatetoProps, {})(ContactsContainer)
