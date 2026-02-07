import { ArrowsLeftRight } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.base-converter.title'),
  path: '/base-converter',
  description: translate('tools.base-converter.description'),
  keywords: [
    // Core functionality
    'integer base converter', 'number base converter', 'base conversion', 'radix converter', 'number system converter',
    'convert number base', 'base calculator', 'numeral system converter',

    // Common bases
    'binary converter', 'decimal converter', 'hexadecimal converter', 'octal converter',
    'binary to decimal', 'decimal to binary', 'hex to decimal', 'decimal to hex',
    'binary to hex', 'hex to binary', 'octal to decimal', 'decimal to octal',

    // Technical terms
    'base 2', 'base 8', 'base 10', 'base 16', 'base 32', 'base 36',
    'radix conversion', 'number base', 'positional notation', 'numeral system',

    // Programming use cases
    'programmer calculator', 'binary calculator', 'hex calculator', 'bitwise calculator',
    'computer number systems', 'programming number converter', 'binary math',

    // Conversions
    'bin to dec', 'dec to bin', 'hex to bin', 'oct to hex', 'binary conversion',
    'hexadecimal conversion', 'convert hex', 'convert binary', 'convert octal',

    // Additional features
    'signed integer', 'unsigned integer', 'twos complement', 'number representation',
    'base converter online', 'radix calculator', 'base conversion tool',
  ],
  component: () => import('./integer-base-converter.vue'),
  icon: ArrowsLeftRight,
});
