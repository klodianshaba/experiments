import { ItemModel } from '../models/item.model';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed } from '@angular/core';

type ItemsState = {
  items: ItemModel[];
  loading: boolean;
};

const initialState: ItemsState = {
  items: [],
  loading: false,
};

export const ItemsStore = signalStore(
  withState(initialState),
  withComputed(({ items }) => ({ itemsCount: computed(() => items().length) })),
  withMethods(store => ({
    load(items: ItemModel[]) {
      patchState(store, { items });
    },
  })),
  withMethods(store => ({
    add(item: ItemModel) {
      patchState(store, { items: [...store.items(), item] });
    },
  }))
);
