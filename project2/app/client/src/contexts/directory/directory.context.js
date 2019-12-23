import { createContext } from 'react';

import DIRECTORY_DATA from 'contexts/directory/directory.data';

const DirectoryContext = createContext(DIRECTORY_DATA);

export default DirectoryContext;
