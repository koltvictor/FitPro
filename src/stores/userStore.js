import { auth, createUserWithEmailAndPassword } from "../app/firebase/firebase";

export const userStore = {
  // create a user
  createUser: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return user;
    } catch (error) {
      console.error(error);
    }
  },
};
