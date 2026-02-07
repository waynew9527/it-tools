import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.json-to-xml.title'),
  path: '/json-to-xml',
  description: translate('tools.json-to-xml.description'),
  keywords: [
    // Core functionality
    'json to xml', 'json to xml converter', 'convert json to xml', 'json xml converter',
    'xml from json', 'json parser', 'xml generator', 'json transformation',

    // Format conversions
    'json file to xml', 'convert json', 'json conversion', 'json to xml online',
    'json to xml tool', 'json format converter', 'serialize json to xml',

    // XML format
    'xml format', 'xml syntax', 'xml structure', 'xml document', 'xml generation',
    'generate xml', 'xml builder', 'xml creator', 'xml output',

    // Use cases
    'json validator', 'convert json file', 'json to api', 'xml data generation',
    'xml processor', 'xml generator from json', 'json reader',

    // Technical
    'json parser online', 'xml parser', 'json decoder', 'xml encoder',
    'json to xml string', 'xml stringify', 'json load', 'xml dump',

    // Programming
    'json to xml javascript', 'json to xml python', 'json to xml java',
    'json library', 'xml library', 'json2xml', 'convert json to xml format',

    // File operations
    'json file converter', 'xml file converter', 'convert json file', 'json import',
    'json export to xml', 'json to xml free', 'online json to xml converter',
  ],
  component: () => import('./json-to-xml.vue'),
  icon: Braces,
  createdAt: new Date('2024-08-09'),
});
