import { createMachine, assign } from "xstate";
import { fetchUser } from "./apis";

interface Context {
  user: Record<string, unknown>;
}

export const appMachine = createMachine({
  id: "app",
  initial: "init",
  context: {
    user: {}
  },
  states: {
    init: {
      invoke: {
        id: "saveEmailResetPassword",
        src: (context: Context) => fetchUser(),
        onDone: {
          target: "profile",
          actions: assign({ user: (_, event: any) => event.user })
        },
        onError: {
          target: "auth"
        }
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
