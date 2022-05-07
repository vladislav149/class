class Storage {
  constructor(key, storage) {
    this.key = String(key);
    this.storage = storage === 'local' ? localStorage : sessionStorage;
  }

  get() {
    return storage.getItem(this.key);
  }

  set(value) {
    return someStorage.setItem(this.key, JSON.stringify(value));
  }

  clear() {
    return someStorage.removeItem(this.key);
  }

  isEmpty() {
    const someStorageIsEmpty = this.get() === null || undefined;
    if (someStorageIsEmpty) {
      return true;
    } else {
      return false;
    }
  }
}
