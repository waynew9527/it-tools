import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

import BracketIcon from '~icons/mdi/code-brackets';

export const tool = defineTool({
  name: translate('tools.toml-to-json.title'),
  path: '/toml-to-json',
  description: translate('tools.toml-to-json.description'),
  keywords: [
    // Core functionality
    'toml to json', 'toml to json converter', 'convert toml to json', 'toml json converter',
    'json from toml', 'toml parser', 'json generator', 'toml transformation',

    // Format conversions
    'toml file to json', 'convert toml', 'toml conversion', 'toml to json online',
    'toml to json tool', 'toml format converter', 'serialize toml to json',

    // TOML format
    'toml format', 'toml syntax', 'toml configuration', 'toml config file',
    'parse toml', 'toml language', 'toml decoder',

    // Use cases
    'toml validator', 'convert config file', 'toml to api', 'config to json',
    'configuration converter', 'config parser', 'json generator from toml',

    // Technical
    'toml parser online', 'json parser', 'toml decoder', 'json encoder',
    'toml to json string', 'json stringify', 'toml load', 'json dump',

    // Programming & frameworks
    'cargo toml to json', 'pyproject toml to json', 'rust config to json',
    'toml in rust', 'toml in python', 'toml library', 'config.toml parser',

    // File operations
    'toml file converter', 'json file converter', 'convert toml file', 'toml import',
    'toml export to json', 'toml to json free', 'online toml converter',
  ],
  component: () => import('./toml-to-json.vue'),
  icon: BracketIcon,
  createdAt: new Date('2023-06-23'),
});
