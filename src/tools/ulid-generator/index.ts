import { SortDescendingNumbers } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.ulid-generator.title'),
  path: '/ulid-generator',
  description: translate('tools.ulid-generator.description'),
  keywords: [
    // Core ULID functionality
    'ulid', 'ulid generator', 'ulid online', 'generate ulid', 'create ulid', 'ulid maker',
    'universally unique lexicographically sortable identifier', 'sortable unique id', 'time-sorted id',

    // Features & benefits
    'lexicographically sortable', 'sortable identifier', 'timestamp-based id', 'chronological id',
    'time-ordered uuid', 'sortable uuid', 'ordered unique id', 'sequential id generator',

    // Comparison & alternatives
    'ulid vs uuid', 'better than uuid', 'uuid alternative', 'sortable guid', 'timestamp uuid',
    'uuid replacement', 'modern uuid', 'improved uuid', 'time-based unique id',

    // Technical specifications
    '128-bit identifier', 'base32 encoded', 'crockford base32', 'ulid format', 'ulid specification',
    'millisecond precision', 'random component', 'monotonic ulid', 'ulid string',

    // Use cases & applications
    'database id', 'distributed id', 'primary key generator', 'unique key', 'entity id',
    'document id', 'record id', 'event id', 'log id', 'trace id', 'message id',

    // Database & systems
    'mongodb ulid', 'postgres ulid', 'mysql sortable id', 'cassandra ulid', 'dynamodb ulid',
    'distributed systems id', 'microservices identifier', 'event sourcing id',

    // Programming & implementation
    'javascript ulid', 'ulid js', 'ulid library', 'ulid generator online', 'ulid tool',
    'bulk ulid generator', 'batch ulid', 'multiple ulid',
  ],
  component: () => import('./ulid-generator.vue'),
  icon: SortDescendingNumbers,
  createdAt: new Date('2023-09-11'),
});
