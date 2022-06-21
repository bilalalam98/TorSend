/* eslint-disable no-bitwise */
import { EventEmitter } from "events";

const createUUID = () => {
  const pattern = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  return pattern.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const Constants = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

class NotificationManager extends EventEmitter {
  constructor() {
    super();
    this.listNotify = [];
  }

  create(notify) {
    const defaultNotify = {
      id: createUUID(),
      type: "info",
      message: null,
      title: null,
      timeOut: 10000,
      customClassName: "",
    };
    if (notify.priority) {
      this.listNotify.unshift(Object.assign(defaultNotify, notify));
    } else {
      this.listNotify.push(Object.assign(defaultNotify, notify));
    }
    this.emitChange();
  }

  success(message, timeOut = 5000, onClick, priority, customClassName) {
    this.create({
      type: Constants.SUCCESS,
      message,
      timeOut,
      onClick,
      priority,
      customClassName,
    });
  }

  error(message, timeOut = 5000, onClick, priority, customClassName) {
    this.create({
      type: Constants.ERROR,
      title: "Error",
      message,
      timeOut,
      onClick,
      priority,
      customClassName,
    });
  }

  remove(notification) {
    this.listNotify = this.listNotify.filter((n) => notification.id !== n.id);
    this.emitChange();
  }

  emitChange() {
    this.emit(Constants.CHANGE, this.listNotify);
  }

  addChangeListener(callback) {
    this.addListener(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new NotificationManager();
