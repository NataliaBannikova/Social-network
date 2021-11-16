const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            return {
              ...state,
              messages: [...state.messages, {id: 6, message: action.newMessageBody}]
            }

        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
})


export default dialogsReducer;