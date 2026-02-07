import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.json-to-yaml-converter.title'),
  path: '/json-to-yaml-converter',
  description: translate('tools.json-to-yaml-converter.description'),
  keywords: [
    // Core functionality
    'json to yaml', 'json to yaml converter', 'convert json to yaml', 'json yaml converter',
    'json to yml', 'yaml from json', 'json parser', 'json transformation',

    // Format conversions
    'json file to yaml', 'convert json', 'json conversion', 'json to yaml online',
    'json to yaml tool', 'json format converter', 'serialize json to yaml',

    // Data formats
    'json format', 'yaml format', 'json syntax', 'yaml syntax', 'data serialization',
    'configuration format', 'config file converter', 'json configuration',

    // Use cases
    'parse json', 'json validator', 'convert config file', 'json to api',
    'json for yaml', 'json generator', 'yaml generator from json',

    // Technical
    'json parser online', 'json to yaml converter online', 'json decoder',
    'json to yaml string', 'json stringify', 'yaml stringify', 'json load',

    // Programming
    'json to yaml javascript', 'json to yaml python', 'json to yaml node',
    'json library', 'yaml library', 'json module', 'parse json online',

    // File operations
    'json file converter', 'json file parser', 'convert json file', 'json import',
    'json export to yaml', 'json to yaml free', 'online json converter',
  ],
  component: () => import('./json-to-yaml.vue'),
  icon: Braces,
  createdAt: new Date('2023-04-10'),
});
