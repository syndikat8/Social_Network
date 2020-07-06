import React from "react";
import {create, act} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
//1 какую компоненту тестируем
describe("ProfileStatus component", () => {
  //2 Что тестируем
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="newStatus"/>)

    const instance = component.root
    expect(instance.props.status).toBe("newStatus")
  })

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="newStatus"/>)

    const root = component.root
    const span = root.findByType("span")
    expect(span).not.toBeNull()
  })

  test("after creation <input> should be displayed", () => {
    const component = create(<ProfileStatus status="newStatus"/>)

    const root = component.root
    expect(() => {
      root.findByType("input")
    }).toThrow()
  })

  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatus status="newStatus"/>)

    const root = component.root
    const span = root.findByType("span")
    expect(span.children[0]).toBe("newStatus")
  })

  test("input should be displayed in editeMode instead of span", () => {

    let component
    act(() => {
      component = create(<ProfileStatus status="newStatus"/>)
    })

    const root = component.root
    const span = root.findByType("span")
    act(() => span.props.onDoubleClick())
    const input = root.findByType("input")
    expect(input.props.value).toBe("newStatus")
  })

  test("callback should be called", () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status="newStatus" updateStatus={mockCallback}/>)

    const instance = component.root
    instance.props.updateStatus()
    expect(mockCallback.mock.calls.length).toBe(1)
  })

});


