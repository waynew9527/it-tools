import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';
import BracketIcon from '~icons/mdi/code-brackets';

export const tool = defineTool({
  name: translate('tools.toml-to-yaml.title'),
  path: '/toml-to-yaml',
  description: translate('tools.toml-to-yaml.description'),
  keywords: [
    // Core functionality
    'toml to yaml', 'toml to yaml converter', 'convert toml to yaml', 'toml yaml converter',
    'yaml from toml', 'toml parser', 'yaml generator', 'toml transformation',

    // Format conversions
    'toml file to yaml', 'convert toml', 'toml conversion', 'toml to yaml online',
    'toml to yaml tool', 'toml format converter', 'serialize toml to yaml',

    // TOML format
    'toml format', 'toml syntax', 'toml configuration', 'toml config file',
    'parse toml', 'toml language', 'toml decoder',

    // YAML format
    'yaml format', 'yaml syntax', 'yaml configuration', 'yaml config file',
    'yaml generator', 'yaml output', 'yaml formatter',

    // Use cases
    'toml validator', 'convert config file', 'config migration', 'toml to config',
    'configuration converter', 'config transformation', 'yaml from config',

    // Technical
    'toml parser online', 'yaml parser', 'toml decoder', 'yaml encoder',
    'toml to yaml string', 'yaml stringify', 'toml load', 'yaml dump',

    // Programming & frameworks
    'cargo toml to yaml', 'pyproject toml to yaml', 'rust config to yaml',
    'toml in rust', 'toml in python', 'config.toml to yaml',

    // File operations
    'toml file converter', 'yaml file converter', 'convert toml file', 'toml import',
    'toml export to yaml', 'toml to yaml free', 'online toml to yaml converter',
  ],
  component: () => import('./toml-to-yaml.vue'),
  icon: BracketIcon,
  createdAt: new Date('2023-06-23'),
});
