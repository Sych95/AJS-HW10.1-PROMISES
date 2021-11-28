import read from './base/reader';
import json from './base/parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read().then((data) => {
        json(data)
          .then((obj) => {
            const savingInfo = JSON.parse(obj);
            const saving = new GameSaving(savingInfo);
            resolve(saving);
          });
      });
    });
  }
}
