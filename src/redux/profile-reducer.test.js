import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react";

let state = {
    posts: [{
        id: 1,
        message: "Hi, how are you?",
        likesCount: 11
      },
      {
        id: 2,
        message: "It's my first post?",
        likesCount: 0
      },
    ]
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("bubu");
    
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

test('message of new posts should be correct', () => {
    let action = addPostActionCreator("bubu");
    
    let newState = profileReducer(state, action);

    expect (newState.posts[2].message).toBe("bubu");
});

test('after deleting messages length of posts should be decrement', () => {
    let action = deletePost(1);
    
    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(1);
});

test(`after deleting messages length of posts shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(100);
    
    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(2);
});

