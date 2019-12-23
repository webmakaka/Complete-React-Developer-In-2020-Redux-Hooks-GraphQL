import { createContext } from 'react';

import SHOP_DATA from 'contexts/collections/shop.data.js';

const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
