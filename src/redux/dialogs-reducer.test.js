import React from "react";
import dialogsReducer, {addMessage} from "./dialogs-reducer";

let initialState = {
  messages: [
    {message: "Hi", id: 1},
    {message: "Hi is you", id: 2},
    {message: "You", id: 3},
    {message: "You", id: 4},
    {message: "You", id: 5}
  ]
}

test("length of post should be incremented", () => {
  // 1. Test data
  let action = addMessage("HUSTLER")
  // 2. action
  let newState = dialogsReducer(initialState, action)
  // 3. expectation
  expect(newState.messages.length).toBe(6)
})
