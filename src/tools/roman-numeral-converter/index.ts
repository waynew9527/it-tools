import { LetterX } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.roman-numeral-converter.title'),
  path: '/roman-numeral-converter',
  description: translate('tools.roman-numeral-converter.description'),
  keywords: [
    // Core functionality
    'roman numeral converter', 'roman to arabic', 'arabic to roman', 'roman numerals',
    'convert roman numerals', 'roman number converter', 'roman digits', 'numeral converter',

    // Roman symbols
    'I', 'V', 'X', 'L', 'C', 'D', 'M', 'roman letters', 'roman symbols', 'roman figures',

    // Conversions
    'roman to decimal', 'decimal to roman', 'roman to number', 'number to roman',
    'roman to integer', 'integer to roman', 'convert to roman numerals', 'roman numeral translation',

    // Use cases
    'roman numeral calculator', 'roman numeral generator', 'roman numeral chart',
    'roman numeral system', 'ancient roman numbers', 'roman counting system',

    // Educational
    'learn roman numerals', 'roman numeral rules', 'roman numeral format',
    'how to read roman numerals', 'roman numeral examples', 'roman numeral guide',

    // Technical
    'roman numeral parser', 'roman numeral validation', 'roman numeral algorithm',
    'roman numeral encoding', 'roman numeral decoder',

    // Specific numbers
    'roman numeral 1000', 'roman numeral 500', 'roman numeral 100',
    'IV', 'IX', 'XL', 'XC', 'CD', 'CM', 'roman numeral combinations',
    'roman numeral online tool', 'roman numeral converter online',
  ],
  component: () => import('./roman-numeral-converter.vue'),
  icon: LetterX,
});
