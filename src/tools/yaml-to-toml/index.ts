import { AlignJustified } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.yaml-to-toml.title'),
  path: '/yaml-to-toml',
  description: translate('tools.yaml-to-toml.description'),
  keywords: [
    // Core functionality
    'yaml to toml', 'yaml to toml converter', 'convert yaml to toml', 'yaml toml converter',
    'yml to toml', 'toml from yaml', 'yaml parser', 'toml generator',

    // Format conversions
    'yaml file to toml', 'convert yml to toml', 'yaml conversion', 'yaml to toml online',
    'yaml to toml tool', 'yaml format converter', 'serialize yaml to toml',

    // TOML format
    'toml format', 'toml syntax', 'toml configuration', 'toml config file',
    'toml language', 'toml file format', 'minimal config language',

    // Use cases
    'parse yaml', 'toml validator', 'convert config file', 'yaml to config',
    'configuration converter', 'config migration', 'toml generator from yaml',

    // Technical
    'yaml parser online', 'toml parser', 'yaml decoder', 'toml encoder',
    'yaml to toml string', 'toml stringify', 'yaml load', 'toml dump',

    // Programming & frameworks
    'rust config', 'cargo toml', 'toml in rust', 'toml in go', 'toml in python',
    'yaml to cargo toml', 'pyproject toml', 'config.toml',

    // File operations
    'yml file to toml', 'toml file converter', 'convert yaml file', 'yaml import',
    'yaml export to toml', 'yaml to toml free', 'online yaml to toml converter',

    // Related formats
    'yaml vs toml', 'toml vs yaml', 'config format', 'data serialization format',
  ],
  component: () => import('./yaml-to-toml.vue'),
  icon: AlignJustified,
  createdAt: new Date('2023-06-23'),
});
