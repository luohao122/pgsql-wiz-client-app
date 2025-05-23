import EventEmitter from "eventemitter3";

import { EventType } from "./types";

class EventBus {
  private emitter: EventEmitter;

  constructor() {
    this.emitter = new EventEmitter();
  }

  publish<T>(eventType: EventType, eventPayload?: T): void {
    this.emitter.emit(eventType, eventPayload);
  }

  subscribe<T>(
    eventType: EventType,
    handler: (eventPayload?: T) => void
  ): void {
    this.emitter.on(eventType, handler);
  }

  unsubscribe<T>(
    eventType: EventType,
    handler: (eventPayload?: T) => void
  ): void {
    this.emitter.off(eventType, handler);
  }
}

export const eventBus = new EventBus();
