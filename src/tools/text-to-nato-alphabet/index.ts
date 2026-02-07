import { Speakerphone } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.text-to-nato-alphabet.title'),
  path: '/text-to-nato-alphabet',
  description: translate('tools.text-to-nato-alphabet.description'),
  keywords: [
    // Core functionality
    'nato alphabet', 'nato phonetic alphabet', 'text to nato', 'nato converter', 'phonetic alphabet converter',
    'nato alphabet converter', 'military alphabet', 'phonetic code', 'spelling alphabet',

    // Phonetic terms
    'phonetic spelling', 'phonetic translator', 'alfa bravo charlie', 'radio alphabet',
    'aviation alphabet', 'icao alphabet', 'international phonetic alphabet', 'itu alphabet',

    // NATO words
    'alpha bravo', 'charlie delta', 'echo foxtrot', 'golf hotel', 'india juliet',
    'kilo lima', 'mike november', 'oscar papa', 'quebec romeo', 'sierra tango',
    'uniform victor', 'whiskey xray', 'yankee zulu',

    // Use cases
    'spell over phone', 'radio communication', 'military communication', 'aviation communication',
    'clear communication', 'phonetic transmission', 'oral transmission', 'voice communication',

    // Technical
    'nato phonetic code', 'phonetic converter online', 'nato alphabet online', 'spelling converter',
    'phonetic alphabet tool', 'nato translator', 'text to phonetic', 'phonetic spelling tool',

    // Applications
    'customer service alphabet', 'call center alphabet', 'dispatch alphabet',
  ],
  component: () => import('./text-to-nato-alphabet.vue'),
  icon: Speakerphone,
});
