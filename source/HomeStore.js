import { observable, makeObservable, makeAutoObservable, action} from "mobx";

class HomeStore {
  triggered = false

  constructor() {
    makeAutoObservable(this)
  }

  activateTrigger() {
    this.triggered = true
  }
  deActivateTrigger() {
    this.triggered = false
  }
}

export default new HomeStore;

