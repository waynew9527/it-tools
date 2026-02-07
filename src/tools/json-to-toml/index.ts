import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.json-to-toml.title'),
  path: '/json-to-toml',
  description: translate('tools.json-to-toml.description'),
  keywords: [
    // Core functionality
    'json to toml', 'json to toml converter', 'convert json to toml', 'json toml converter',
    'toml from json', 'json parser', 'toml generator', 'json transformation',

    // Format conversions
    'json file to toml', 'convert json', 'json conversion', 'json to toml online',
    'json to toml tool', 'json format converter', 'serialize json to toml',

    // TOML format
    'toml format', 'toml syntax', 'toml configuration', 'toml config file',
    'toml language', 'toml file format', 'config format',

    // Use cases
    'parse json', 'toml validator', 'convert config file', 'json to config',
    'configuration converter', 'config migration', 'toml generator from json',

    // Technical
    'json parser online', 'toml parser', 'json decoder', 'toml encoder',
    'json to toml string', 'toml stringify', 'json load', 'toml dump',

    // Programming & frameworks
    'rust config', 'cargo toml', 'toml in rust', 'toml in go', 'toml in python',
    'json to cargo toml', 'pyproject toml', 'config.toml from json',

    // File operations
    'json file converter', 'toml file converter', 'convert json file', 'json import',
    'json export to toml', 'json to toml free', 'online json to toml converter',
  ],
  component: () => import('./json-to-toml.vue'),
  icon: Braces,
  createdAt: new Date('2023-06-23'),
});
