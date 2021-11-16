import React from 'react';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.textarea}>
      <div>
        <Field component={Textarea} 
              validate={[required, maxLength50]} 
              name="newMessageBody"  cols="30" rows="10" placeholder="Enter your message.." />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {

  let state = props.dialogsPage;


  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

  let newDialogText = state.newDialogText;


  
  let addNewMessage = (values) => {
    props.addMessageActionCreator(values.newMessageBody);
  }


  return (
    
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <AddMessageReduxForm onSubmit={addNewMessage} />

        </div>
      </div>

    </div>
  );
};

export default Dialogs;
