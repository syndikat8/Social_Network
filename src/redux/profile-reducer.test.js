import profileReducer, {addPost, deletePost} from "./profile-reducer";
import React from "react";

let initialState = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: "12"},
    {id: 2, message: "It's my first post?", likesCount: "11"},
    {id: 3, message: "Lololo", likesCount: "11"},
    {id: 4, message: "HEHEHE", likesCount: "11"}
  ]
}

test("length of post should be incremented", () => {
  // 1. Test data
  let action = addPost("HUSTLER")
  // 2. action
  let newState = profileReducer(initialState, action)
  // 3. expectation
  expect(newState.posts.length).toBe(5)
})

test("message of new post should be correct", () => {
  // 1. Test data
  let action = addPost("HUSTLER")
  // 2. action
  let newState = profileReducer(initialState, action)
  // 3. expectation
  expect(newState.posts[4].message).toBe("HUSTLER")
})

test("length of post should be decrement", () => {
  // 1. Test data
  let action = deletePost(1)
  // 2. action
  let newState = profileReducer(initialState, action)
  // 3. expectation
  expect(newState.posts.length).toBe(3)
})

test("after deleting length should't decrement if id is incorrect", () => {
  // 1. Test data
  let action = deletePost(1000)
  // 2. action
  let newState = profileReducer(initialState, action)
  // 3. expectation
  expect(newState.posts.length).toBe(4)
})