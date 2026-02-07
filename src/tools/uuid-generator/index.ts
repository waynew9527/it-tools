import { Fingerprint } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.uuid-generator.title'),
  path: '/uuid-generator',
  description: translate('tools.uuid-generator.description'),
  keywords: [
    // Core UUID functionality
    'uuid', 'uuid generator', 'uuid online', 'generate uuid', 'create uuid', 'uuid maker',
    'universally unique identifier', 'unique id generator', 'guid generator', 'guid',

    // UUID versions
    'uuid v1', 'uuid v3', 'uuid v4', 'uuid v5', 'uuid nil', 'random uuid', 'time-based uuid',
    'name-based uuid', 'uuid version 1', 'uuid version 4', 'uuidv4', 'uuidv1',

    // Use cases & applications
    'unique identifier', 'unique id', 'database id', 'primary key generator', 'session id',
    'transaction id', 'correlation id', 'request id', 'entity identifier', 'object id',

    // Technical & development
    'javascript uuid', 'uuid js', 'uuid library', 'uuid format', 'uuid string',
    'uuid generator online', 'uuid tool', '128-bit identifier', 'uuid standard', 'rfc 4122',

    // Database & API
    'uuid for database', 'api uuid', 'rest api id', 'unique key', 'distributed id',
    'microservices id', 'uuid postgres', 'uuid mysql', 'uuid mongodb',

    // Features & formats
    'hyphenated uuid', 'uuid with hyphens', 'uuid without hyphens', 'uuid lowercase',
    'uuid uppercase', 'bulk uuid generator', 'multiple uuid', 'batch uuid',
    'random identifier', 'secure id generator', 'cryptographically secure uuid',
  ],
  component: () => import('./uuid-generator.vue'),
  icon: Fingerprint,
});
