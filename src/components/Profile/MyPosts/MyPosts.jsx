import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { addPostActionCreator} from '../../../redux/profile-reducer';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const ProfileForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostBody" component={Textarea} placeholder={"Post massage"}
         validate={[required, maxLength10]}
         cols="30" rows="10" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const MessageReduxForm = reduxForm({form: 'message'})(ProfileForm);


const MyPosts = React.memo(props => {
  console.log("render yo");

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  let newPostElement = React.createRef();



  let addNewPost = (values) => {
    
    props.addPostActionCreator(values.newPostBody);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MessageReduxForm onSubmit={addNewPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
});

export default MyPosts;
