import { observable, action } from 'mobx';

class AppState {
  @observable selectedRowId = null;
  @observable.ref selectedDist = null;

  @action
  updateSelect(rowId, dist) {
    this.selectedDist = dist;
    this.selectedRowId = rowId;
  }
}

const appState = new AppState();

export default appState;
