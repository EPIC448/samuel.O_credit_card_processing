import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import { default as LuhnTest } from './test_luhn.js';
import { default as CollectiveTest } from './test_collection.js'
 let name
if (require.main === module) {
    name = main()
} 
