// import { createStore } from "vuex";
// import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

// const store = createStore({
//   state: {
//     user: null,
//   },
//   mutations: {
//     setSignedInData(state, data) {
//       state.user = data.user;
//     },
//   },
//   actions: {
//     signIn({ commit }, { email, password }) {
//       signInWithEmailAndPassword(getAuth(), email, password)
//         .then((data) => {
//           commit("setSignedInData", data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     },
//   },
// });

// export default store;

// store.js or store/index.js
import { createStore } from "vuex";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
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
    //  SIGN IN

    signIn({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(getAuth(), email, password)
          .then((data) => {
            console.log("Signed in");
            // console.log(data);
            commit("setUser", data.user);
            // Save the user object to local storage
            localStorage.setItem("user", JSON.stringify(data.user));
            resolve(data);
          })
          .catch((error) => {
            console.log("Error logging in");
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
            console.log(error);
            commit("setErrorMsg", errMsg);
            reject(error);
          });
      });
    },

    // SIGN OUT
    signOut({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          await signOut(getAuth()); // Sign out the user from Firebase
          localStorage.removeItem("user"); // Remove user data from local storage
          commit("setUser", null); // Update the user state in Vuex to null
          resolve();
        } catch (error) {
          console.error(error);
          reject(error);
        }
      });
    },

    // REGISTER WITH EMAIL

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

          console.log("Registration Done");
          console.log(data);
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
          console.log("Error Registering");
          commit("setErrorMsg", errMsg);
          reject(error);
        }
      });
    },

    // REGISTER WITH GOOGLE

    // signInWithGoogle({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(getAuth(), provider)
    //       .then((result) => {
    //         console.log(result.user);
    //         commit("setUser", result.user);
    //         resolve(result.user);
    //       })
    //       .catch((error) => {
    //         console.log("Error signing in with Google");
    //         commit("setErrorMsg", error.message);
    //         reject(error);
    //       });
    //   });
    // },
  },
});
