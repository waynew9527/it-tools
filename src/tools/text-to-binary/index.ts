import { Binary } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.text-to-binary.title'),
  path: '/text-to-binary',
  description: translate('tools.text-to-binary.description'),
  keywords: [
    // Core functionality
    'text to binary', 'binary converter', 'text to ascii binary', 'binary encoder', 'binary decoder',
    'ascii to binary', 'binary to ascii', 'binary to text', 'string to binary', 'binary translator',

    // Binary operations
    'binary code', 'binary encoding', 'binary decoding', 'binary conversion', 'binary format',
    'binary string', 'binary representation', 'binary data', '01010101 binary',

    // ASCII operations
    'ascii converter', 'ascii encoding', 'ascii code', 'ascii to bits', 'ascii binary code',
    'character to binary', 'ascii character code', 'ascii values',

    // Technical
    '8-bit binary', 'binary digit', 'bits and bytes', 'binary output', 'binary input',
    'binary encode online', 'binary decode online', 'binary conversion tool',

    // Use cases
    'encode text to binary', 'decode binary to text', 'binary message', 'binary text converter',
    'text encoder', 'text decoder', 'binary generator', 'binary parser',

    // Programming
    'binary converter online', 'binary encoding tool', 'text to 0 and 1', 'ascii binary converter',
    'character encoding', 'binary representation of text', 'convert string to binary',
    'binary code translator', 'binary string converter', 'ascii to binary online',
  ],
  component: () => import('./text-to-binary.vue'),
  icon: Binary,
  createdAt: new Date('2023-10-15'),
});
