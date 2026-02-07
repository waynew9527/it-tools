import { AlignJustified } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.yaml-to-json-converter.title'),
  path: '/yaml-to-json-converter',
  description: translate('tools.yaml-to-json-converter.description'),
  keywords: [
    // Core functionality
    'yaml to json', 'yaml to json converter', 'convert yaml to json', 'yaml json converter',
    'yml to json', 'yaml parser', 'json from yaml', 'yaml transformation',

    // Format conversions
    'yaml file to json', 'convert yml', 'yaml conversion', 'yaml to json online',
    'yaml to json tool', 'yaml format converter', 'serialize yaml to json',

    // Data formats
    'yaml format', 'json format', 'yaml syntax', 'json syntax', 'data serialization',
    'configuration format', 'config file converter', 'yaml configuration',

    // Use cases
    'parse yaml', 'yaml validator', 'convert config file', 'yaml to api',
    'yaml for json', 'yaml generator', 'json generator from yaml',

    // Technical
    'yaml parser online', 'yaml to json converter online', 'yaml decoder',
    'yaml to json string', 'yaml stringify', 'json stringify', 'yaml load',

    // Programming
    'yaml to json javascript', 'yaml to json python', 'yaml to json node',
    'yaml library', 'json library', 'yaml module', 'parse yaml online',

    // File operations
    'yml file converter', 'yaml file parser', 'convert yaml file', 'yaml import',
    'yaml export to json', 'yaml to json free', 'online yaml converter',
  ],
  component: () => import('./yaml-to-json.vue'),
  icon: AlignJustified,
  createdAt: new Date('2023-04-10'),
});
