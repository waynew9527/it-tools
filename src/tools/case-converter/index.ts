import { LetterCaseToggle } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.case-converter.title'),
  path: '/case-converter',
  description: translate('tools.case-converter.description'),
  keywords: [
    // Core case types
    'case converter', 'text case converter', 'change case', 'convert case', 'case changer',
    'camelCase', 'PascalCase', 'snake_case', 'kebab-case', 'CONSTANT_CASE',
    'capitalCase', 'dotCase', 'headerCase', 'paramCase', 'pathCase', 'sentenceCase',

    // Common conversions
    'uppercase', 'lowercase', 'title case', 'capital letters', 'small letters',
    'upper case converter', 'lower case converter', 'capitalize', 'capitalization',

    // Programming cases
    'camel case converter', 'pascal case converter', 'snake case converter', 'kebab case converter',
    'constant case', 'programming case', 'variable naming', 'code formatting',

    // Use cases
    'text formatting', 'string case', 'case transformation', 'text transformer',
    'case format', 'naming convention', 'code style', 'format text',

    // Technical
    'case converter online', 'case converter tool', 'string case converter', 'text case changer',
    'multi case converter', 'all caps', 'no case', 'sentence case online',
  ],
  component: () => import('./case-converter.vue'),
  icon: LetterCaseToggle,
});
