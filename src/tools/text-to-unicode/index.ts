import { TextWrap } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.text-to-unicode.title'),
  path: '/text-to-unicode',
  description: translate('tools.text-to-unicode.description'),
  keywords: [
    // Core functionality
    'text to unicode', 'unicode converter', 'unicode encoder', 'string to unicode', 'unicode translator',
    'text unicode converter', 'convert text to unicode', 'unicode encoding', 'unicode transformation',

    // Unicode operations
    'unicode characters', 'unicode code points', 'unicode values', 'unicode representation',
    'utf-8', 'utf-16', 'utf-32', 'unicode encoding formats', 'unicode standard',

    // Character encoding
    'character to unicode', 'unicode escape', 'unicode escape sequence', 'unicode hex',
    'unicode decimal', 'character encoding', 'text encoding', 'encode characters',

    // Use cases
    'emoji to unicode', 'symbol to unicode', 'special characters unicode', 'unicode emoji',
    'unicode symbols', 'unicode lookup', 'unicode finder', 'unicode conversion tool',

    // Technical
    'u+0000', 'unicode u+', 'unicode codepoint', 'unicode chart', 'unicode table',
    'ascii to unicode', 'text to utf8', 'text to utf16', 'unicode converter online',

    // Programming
    'unicode in javascript', 'unicode in python', 'unicode string', 'unicode parser',
    'decode unicode', 'encode unicode', 'unicode escaping', 'unicode utility',
    'unicode code converter', 'character code converter',
  ],
  component: () => import('./text-to-unicode.vue'),
  icon: TextWrap,
  createdAt: new Date('2024-01-31'),
});
