import { createSelector } from "reselect";

const get2usersSelector = (state) => {
    return state.usersPage.users;
}


export const get2users = createSelector(get2usersSelector,
    
    (users) => {
    
    return users.filter(u => true);
})


export const getPageSize = (state) => {
    
    return state.usersPage.PageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}