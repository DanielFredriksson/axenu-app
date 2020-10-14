import { makeAutoObservable } from "mobx";

class LeftStore {
  triggered = false;
  triggerMsg = "Not Triggered";

  constructor() {
    makeAutoObservable(this)
  }

  activateTrigger() {
    this.triggered = true
    this.triggerMsg = "Triggered"
  }
  
  deActivateTrigger() {
    this.triggerMsg = "Not Triggered!"
    this.triggered = false
  }
}

export default new LeftStore;

