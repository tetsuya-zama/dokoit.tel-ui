const assert = require("assert");
import {LOGIN_REQUESTED,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT_REQUESTED} from "../../src/action/login";
import {loginRequested,loginSuccess,loginFailure,logoutRequested} from "../../src/action/login";

describe("loginRequested action creator",()=>{
  it("creates LOGIN_REQUESTED action with id and password which user input",()=>{
    const testId = "test_id";
    const testPass = "test_pass";

    const result = loginRequested(testId,testPass);
    assert(result.type === LOGIN_REQUESTED);
    assert(result.payload.id === testId);
    assert(result.payload.pass === testPass);
  });
});
