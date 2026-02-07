import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.xml-to-json.title'),
  path: '/xml-to-json',
  description: translate('tools.xml-to-json.description'),
  keywords: [
    // Core functionality
    'xml to json', 'xml to json converter', 'convert xml to json', 'xml json converter',
    'json from xml', 'xml parser', 'json generator', 'xml transformation',

    // Format conversions
    'xml file to json', 'convert xml', 'xml conversion', 'xml to json online',
    'xml to json tool', 'xml format converter', 'serialize xml to json',

    // XML format
    'xml format', 'xml syntax', 'xml data', 'xml structure', 'xml parsing',
    'parse xml', 'xml tree', 'xml document', 'xml elements', 'xml attributes',

    // Use cases
    'xml validator', 'convert xml file', 'xml to api', 'xml data extraction',
    'xml processor', 'json generator from xml', 'xml reader',

    // Technical
    'xml parser online', 'json parser', 'xml decoder', 'json encoder',
    'xml to json string', 'json stringify', 'xml load', 'json dump',

    // Programming
    'xml to json javascript', 'xml to json python', 'xml to json java',
    'xml library', 'json library', 'xml2json', 'parse xml to json',

    // File operations
    'xml file converter', 'json file converter', 'convert xml file', 'xml import',
    'xml export to json', 'xml to json free', 'online xml converter',
  ],
  component: () => import('./xml-to-json.vue'),
  icon: Braces,
  createdAt: new Date('2024-08-09'),
});
