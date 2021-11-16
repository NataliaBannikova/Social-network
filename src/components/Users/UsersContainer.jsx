import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { get2users, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from '../../redux/users-selectors';


class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
     
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        
        return <>
        
            { this.props.isFetching ? 
                <Preloader />
                : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={this.props.followingInProgress}
                         /> 
                </>         
    }
}


let mapStateToProps = (state) => {
    return {
        users: get2users(state),
        pageSize: state.usersPage.pageSize,
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    })
)(UsersContainer);

