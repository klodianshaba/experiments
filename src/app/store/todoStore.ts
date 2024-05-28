import { TodoModel } from '../models/todoModel';
import {
  patchState,
  signalStore,
  StateSignal,
  withComputed,
  withMethods,
} from '@ngrx/signals';
import { computed } from '@angular/core';
import {
  addEntities,
  addEntity,
  removeAllEntities,
  removeEntities,
  removeEntity,
  setAllEntities,
  setEntities,
  setEntity,
  updateAllEntities,
  updateEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { EntityId, EntitySignals } from '@ngrx/signals/entities/src/models';

export const entityMethods = <T extends { id: EntityId }>(
  store: StateSignal<object> & EntitySignals<T>
) => {
  return {
    set(entity: T) {
      patchState(store, setEntity(entity));
    },
    setMany(entities: T[]) {
      patchState(store, setEntities(entities));
    },
    setAll(entities: T[]) {
      patchState(store, setAllEntities(entities));
    },
    add(entity: T) {
      patchState(store, addEntity(entity));
    },
    addMany(entities: T[]) {
      patchState(store, addEntities(entities));
    },
    update(id: EntityId, entity: Partial<T>) {
      patchState(store, updateEntity({ id, changes: entity }));
    },
    updateMany(ids: EntityId[], entity: Partial<T>) {
      patchState(store, updateEntities({ ids, changes: entity }));
    },
    updateAll(entity: Partial<T>) {
      patchState(store, updateAllEntities<T>(entity));
    },
    updatePredicate(predicate: (entity: T) => boolean, entity: Partial<T>) {
      patchState(
        store,
        updateEntities<T>({
          predicate: (entity: T) => predicate(entity),
          changes: entity,
        })
      );
    },
    remove(id: EntityId) {
      patchState(store, removeEntity(id));
    },
    removeMany(ids: EntityId[]) {
      patchState(store, removeEntities(ids));
    },
    removeAll() {
      patchState(store, removeAllEntities());
    },
    removePredicate(predicate: (entity: T) => boolean) {
      patchState(
        store,
        removeEntities((entity: T) => predicate(entity))
      );
    },
    //select methods
    select(id: EntityId) {
      return computed(() => store.entities().find(entity => entity.id === id));
    },
    selectMany(ids: EntityId[]) {
      return computed(() =>
        store.entities().filter(entity => ids.includes(entity.id))
      );
    },
    selectPredicate(predicate: (entity: T) => boolean) {
      return computed(() =>
        store.entities().filter(entity => predicate(entity))
      );
    },
  };
};

export const entityComputed = <T>(store: EntitySignals<T>) => {
  return {
    count: computed(() => store.entities().length),
  };
};

export const todo: TodoModel = {
  id: Math.random(),
  name: Math.random().toString(),
  done: false,
  active: true,
};
export const todos: TodoModel[] = [
  {
    id: Math.random(),
    name: Math.random().toString(),
    done: false,
    active: true,
  },
  {
    id: Math.random(),
    name: Math.random().toString(),
    done: false,
    active: true,
  },
];
export const id: number = 1;
export const ids: number[] = [1, 2];
export const todoPartial: Partial<TodoModel> = {};

export const todoStore = signalStore(
  withEntities<TodoModel>(),
  withComputed(store => entityComputed<TodoModel>(store)),
  withMethods(store => entityMethods<TodoModel>(store))
);
