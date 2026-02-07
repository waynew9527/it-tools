import { Calendar } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.date-converter.title'),
  path: '/date-converter',
  description: translate('tools.date-converter.description'),
  keywords: [
    // Core functionality
    'date converter', 'time converter', 'datetime converter', 'date time conversion', 'convert date',
    'date format converter', 'time format converter', 'date formatter', 'timestamp converter',

    // Formats & standards
    'iso 8601', 'iso date', 'utc time', 'unix timestamp', 'epoch time', 'epoch converter',
    'rfc 3339', 'rfc 2822', 'date string', 'time string', 'datetime format',

    // Timezone operations
    'timezone converter', 'timezone conversion', 'time zone', 'utc to local', 'local to utc',
    'timezone offset', 'gmt converter', 'time zone calculator', 'world time converter',

    // Date components
    'year month day', 'hour minute second', 'millisecond', 'date parts', 'time components',
    'calendar date', 'date picker', 'time picker',

    // Conversions
    'unix to date', 'date to unix', 'timestamp to date', 'date to timestamp', 'epoch to date',
    'iso to date', 'date to iso', 'string to date', 'date to string',

    // Use cases
    'date calculator', 'time calculator', 'date parser', 'parse date', 'format date',
    'date utility', 'datetime utility', 'date helper', 'time helper', 'date tool',
  ],
  component: () => import('./date-time-converter.vue'),
  icon: Calendar,
});
