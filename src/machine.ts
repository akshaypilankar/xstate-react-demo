import { createMachine } from "xstate";
const appMachine = Machine({
  id: "app",
  initial: "init",
  context: {
    user: {}
  },
  states: {
    init: {
      on: {
        AUTH: "auth",
        PROFILE: "profile"
      }
    },
    auth: {
      initial: "login",
      states: {
        login: {
          on: {
            PROFILE: "#app.profile",
            SIGNUP: "signup",
            FORGET_PASSWORD: "forgetPassword"
          }
        },
        signup: {
          on: {
            PROFILE: "#app.profile",
            LOGIN: "login"
          }
        },
        forgetPassword: {
          on: {
            LOGIN: "login"
          }
        }
      }
    },
    profile: {
      on: { LOGOUT: "logout" }
    },
    logout: {
      on: { AUTH: "auth" }
    }
  }
});
