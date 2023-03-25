import { createStore } from "vuex";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default createStore({
  state: {
    errorMsg: "",
    user: null,
  },
  mutations: {
    setErrorMsg(state, errorMsg) {
      state.errorMsg = errorMsg;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    signIn({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(getAuth(), email, password)
          .then((data) => {
            commit("setUser", data.user);
            localStorage.setItem("user", JSON.stringify(data.user));
            resolve(data);
          })
          .catch((error) => {
            let errMsg;
            switch (error.code) {
              case "auth/invalid-email":
                errMsg = "Invalid email";
                break;
              case "auth/user-not-found":
                errMsg = "No account with that email found";
                break;
              case "auth/wrong-password":
                errMsg = "Invalid password";
                break;
              default:
                errMsg = "Email or password was incorrect";
                break;
            }
            commit("setErrorMsg", errMsg);
            reject(error);
          });
      });
    },

    signOut({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          await signOut(getAuth());
          localStorage.removeItem("user");
          commit("setUser", null);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },

    register({ commit }, { username, email, password }) {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await createUserWithEmailAndPassword(
            getAuth(),
            email,
            password
          );
          await updateProfile(getAuth().currentUser, {
            displayName: username,
          });

          commit("setUser", getAuth().currentUser);
          resolve(data);
        } catch (error) {
          let errMsg;
          switch (error.code) {
            case "auth/invalid-email":
              errMsg = "Invalid email";
              break;
            case "auth/user-not-found":
              errMsg = "No account with that email found";
              break;
            case "auth/wrong-password":
              errMsg = "Invalid password";
              break;
            default:
              errMsg = "Email or password was incorrect";
              break;
          }
          commit("setErrorMsg", errMsg);
          reject(error);
        }
      });
    },

    // Uncomment this section if you want to enable Google sign-in
    // signInWithGoogle({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(getAuth(), provider)
    //       .then((result) => {
    //         commit("setUser", result.user);
    //         resolve(result.user);
    //       })
    //       .catch((error) => {
    //         commit("setErrorMsg", error.message);
    //         reject(error);
    //       });
    //   });
    // },
  },
});
