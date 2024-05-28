import { ItemModel } from '../models/item.model';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed } from '@angular/core';
import {
  addEntity,
  removeEntity,
  setAllEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { EntityId } from '@ngrx/signals/entities/src/models';

type ItemsState = {
  items: ItemModel[];
  loading: boolean;
};

const initialState: ItemsState = {
  items: [],
  loading: false,
};

function entityMethods<T extends { id: EntityId }>(store: any) {
  return {
    load(todos: T[]) {
      patchState(store, setAllEntities(todos));
    },
    add(todo: T) {
      patchState(store, addEntity(todo));
    },
    update(id: number, todo: Partial<T>) {
      patchState(store, updateEntity({ id, changes: todo }));
    },
    remove(id: number) {
      patchState(store, removeEntity(id));
    },
  };
}

function entityComputed(state: any) {
  return {
    count: computed(() => state.entities().length),
  };
}

export const ItemsStore = signalStore(
  withState(initialState),
  withEntities<ItemModel>(),
  withComputed(({ entities }) => ({
    itemsCount: computed(() => entities().length),
  })),
  withComputed(store => entityComputed(store)),
  withMethods(store => entityMethods<ItemModel>(store))
);
