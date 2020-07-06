import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
//1 какую компоненту тестем
describe("ProfileStatus component", () => {
  //2 Что тестим
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="newStatus" />);
    const instance = component.root;
    expect(instance.props.status).toBe("newStatus");
  });
});


