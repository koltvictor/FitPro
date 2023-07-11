import { auth, db } from "../app/firebase/firebase";
// import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import userStore from "../stores/userStore";

export const useFetchProfile = (uid) => {
  useEffect(() => {
    if (!uid) return;

    const fetchProfile = async () => {
      const profileRef = db.collection("profiles").doc(uid);
      const doc = await profileRef.get();
      if (doc.exists) {
        userStore.setProfile(doc.data());
      } else {
        console.log("No profile data available");
      }
    };

    fetchProfile();
  }, [uid]);
};
