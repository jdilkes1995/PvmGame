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
import { collection, doc, setDoc } from "firebase/firestore";
import { db, addDoc } from "@/firestoreDB.js";


export default createStore({
  state: {
    errorMsg: "",
    user: null,
    teams: [],
  },
  mutations: {
    setErrorMsg(state, errorMsg) {
      state.errorMsg = errorMsg;
    },
    setUser(state, user) {
      state.user = user;
    },
    addTeam(state, team) {
      state.teams.push(team);
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

    addUserToFirestore({ state }, userData) {
      return new Promise(async (resolve, reject) => {
        try {
          // Get a Firestore reference to the "users" collection
          const usersRef = collection(db, "users");

          // Add the user's UID to the user data
          userData.uid = state.user.uid;

          // Add the user data to the "users" collection
          const docRef = await addDoc(usersRef, userData);

          // Resolve with the ID of the newly created document
          resolve(docRef.id);
        } catch (error) {
          reject(error);
        }
      });
    },

    createTeam({ commit, state }, { teamName, teamPhrase, teamColour }) {
      // const uid = state.user ? state.user.uid : null;

      // Get a reference to the "teams" collection
      const teamsRef = collection(db, "teams");

      // Generate a new document reference for the team
      const teamRef = doc(teamsRef);

      // Create a new team object
      const team = {
        name: teamName,
        phrase: teamPhrase,
        colour: teamColour,
        creatorUid: state.user.uid,
        members: [
          {
            uid: state.user.uid,
            email: state.user.email,
            displayName: state.user.displayName,
          },
        ],
        // members: [{ uid: uid, isLeader: true }],
      };

      // Add the team to the Firestore database
      setDoc(teamRef, team)
        .then(() => {
          // Add the team to the state
          commit("addTeam", {
            id: teamRef.id,
            ...team,
          });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
  },
});
