import { FileDigit } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.base64-string-converter.title'),
  path: '/base64-string-converter',
  description: translate('tools.base64-string-converter.description'),
  keywords: [
    // Core functionality
    'base64', 'base64 encoder', 'base64 decoder', 'base64 string converter', 'encode base64', 'decode base64',
    'base64 encode online', 'base64 decode online', 'text to base64', 'base64 to text',

    // JavaScript functions
    'atob', 'btoa', 'atob online', 'btoa online', 'javascript base64', 'js base64',
    'base64 encoding javascript', 'base64 decoding javascript',

    // Use cases
    'encode string', 'decode string', 'string encoding', 'string decoding', 'text encoding',
    'base64 string', 'base64 text converter', 'string to base64 online',

    // Technical
    'rfc 4648', 'mime base64', 'base64 encoding', 'base64 decoding', 'ascii to base64',
    'utf8 to base64', 'base64 charset', 'base64 standard',

    // Web development
    'web encoding', 'url safe base64', 'base64 url', 'data encoding', 'email encoding',
    'base64 api', 'base64 format', 'base64 conversion',

    // Security & data
    'encode password', 'encode credentials', 'safe encoding', 'data obfuscation',
    'base64 encryption', 'base64 hash',

    // Tools & utilities
    'base64 encoder online', 'base64 decoder online', 'online base64 tool', 'base64 utility',
    'base64 converter tool', 'free base64 encoder',
  ],
  component: () => import('./base64-string-converter.vue'),
  icon: FileDigit,
  redirectFrom: ['/file-to-base64', '/base64-converter'],
});
