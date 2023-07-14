import { makeObservable, observable, action } from "mobx";

class UserStore {
  @observable user = null;
  @observable profile = null;
  @observable profileLoadedListeners = []; // Initialize as an empty array

  constructor() {
    makeObservable(this);
  }

  @action setUser(user) {
    this.user = user;
  }

  @action setProfile(profile) {
    this.profile = profile;
  }

  @action onProfileLoaded(callback) {
    this.profileLoadedListeners.push(callback);
    return () => {
      this.profileLoadedListeners = this.profileLoadedListeners.filter(
        (listener) => listener !== callback
      );
    };
  }

  emitProfileLoaded() {
    this.profileLoadedListeners.forEach((listener) => {
      listener();
    });
  }
}

const userStore = new UserStore();

export default userStore;
