import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

const StorageService = (function () {

  return {
    async setItem(key: string, value: string) {
      await Storage.set({
        key: key,
        value: value
      })
    },

    async getItem(key: string) {
      const { value } = await Storage.get({ key });

      return value;
    },

    async removeItem(key: string) {
      await Storage.remove({ key });
    },

    async clear() {
      await Storage.clear();
    }
  }
})()

export default StorageService;