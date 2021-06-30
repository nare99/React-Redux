import React from 'react';
import { connect } from 'react-redux';

class Users extends React.Component {

    render() {
        // console.log(this.props.users)
        return (
            <ul>
                {this.props.users.length !== 0 ? this.props.users.map(user => <li key={user.id}> Name: {user.name}, Job: {user.job}</li> ): <h2> There are no users </h2>}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersReducer.data
    };
}


export default connect(mapStateToProps)(Users);