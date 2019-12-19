import { UPDATE_COLLECTIONS } from 'redux/types/shop.types.js';

export const updateCollections = collectionsMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
});
