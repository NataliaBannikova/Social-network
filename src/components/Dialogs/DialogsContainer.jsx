import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';

import DialogItem from "./DialogItem/DialogItem";
import Dialogs from './Dialogs';
import Message from "./Message/Message";






let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessageActionCreator: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody))
    }
  }
}



export default compose(
  connect (mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
