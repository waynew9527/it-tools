import { ShortTextRound } from '@vicons/material';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.hmac-generator.title'),
  path: '/hmac-generator',
  description: translate('tools.hmac-generator.description'),
  keywords: [
    // Core HMAC
    'hmac', 'hmac generator', 'hmac online', 'generate hmac', 'hmac calculator', 'hmac tool',
    'hash-based message authentication code', 'message authentication code', 'mac generator',

    // Hash algorithms
    'hmac md5', 'hmac sha1', 'hmac sha256', 'hmac sha224', 'hmac sha512', 'hmac sha384',
    'hmac sha3', 'hmac ripemd160', 'sha256 hmac', 'md5 hmac', 'sha512 hmac',

    // Security & authentication
    'message authentication', 'data integrity', 'signature verification', 'secure hash',
    'cryptographic hash', 'message verification', 'authenticated encryption', 'data authentication',
    'tamper detection', 'integrity check',

    // API & development
    'api signature', 'api authentication', 'webhook signature', 'rest api hmac', 'api security',
    'request signature', 'hmac signature', 'signed request', 'api key hmac',

    // Technical use cases
    'jwt signature', 'token generation', 'secret key hash', 'keyed hash', 'symmetric key',
    'hmac verification', 'hash with key', 'cryptographic mac', 'secure api',

    // Implementation
    'hmac javascript', 'hmac online tool', 'hmac generator online', 'calculate hmac',
    'hmac hash generator', 'message digest', 'keyed-hash message authentication',
    'hmac encoder', 'hmac creator',
  ],
  component: () => import('./hmac-generator.vue'),
  icon: ShortTextRound,
});
