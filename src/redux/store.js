import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
  _state: {
    profilePage: {
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
      ],
      newPostText: "bebebe",
    },

    dialogsPage: {
      messages: [{
          id: 1,
          message: "Hi"
        },
        {
          id: 2,
          message: "How are you?"
        },
        {
          id: 3,
          message: "Yo"
        },
      ],
      dialogs: [{
          id: 1,
          name: "Nata"
        },
        {
          id: 2,
          name: "Stas"
        },
        {
          id: 3,
          name: "Emma"
        },
      ],
      newDialogText: "dududu",
    },

    sidebars: {
      sidebar: [{
          id: 1,
          name: "Bibi"
        },
        {
          id: 2,
          name: "Dodo"
        },
        {
          id: 3,
          name: "Bubu"
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("state was changed");
  },

  getState() {

    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) { 

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebars = sidebarReducer(this._state.sidebars, action);
    
    this._callSubscriber(this._state);
  }
};



export default store;
window.store = store;