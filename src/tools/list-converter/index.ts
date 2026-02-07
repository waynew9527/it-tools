import { List } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.list-converter.title'),
  path: '/list-converter',
  description: translate('tools.list-converter.description'),
  keywords: [
    // Core functionality
    'list converter', 'list tool', 'array converter', 'list transformer', 'list modifier',
    'convert list', 'transform list', 'list editor', 'list processor',

    // List operations
    'sort list', 'reverse list', 'list sorter', 'alphabetical sort', 'numerical sort',
    'sort ascending', 'sort descending', 'reverse order', 'flip list',

    // Text operations
    'add prefix', 'add suffix', 'prefix list', 'suffix list', 'prepend text',
    'append text', 'bulk prefix', 'bulk suffix', 'text prefix',

    // Case operations
    'lowercase list', 'uppercase list', 'convert to lowercase', 'convert to uppercase',
    'capitalize list', 'lower case converter', 'upper case converter',

    // Advanced operations
    'truncate list', 'remove duplicates', 'unique list', 'deduplicate list',
    'filter list', 'clean list', 'list cleanup', 'list deduplication',

    // Use cases
    'text list tool', 'line editor', 'bulk text editor', 'mass text operation',
    'batch text processing', 'list manipulation', 'array manipulation',

    // Data processing
    'csv to list', 'list formatter', 'text formatter', 'line formatter',
    'list processing tool', 'data list converter', 'text line processor',
    'multi-line editor', 'bulk line editor', 'list online tool',
  ],
  component: () => import('./list-converter.vue'),
  icon: List,
  createdAt: new Date('2023-05-07'),
});
