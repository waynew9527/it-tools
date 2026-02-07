import { EyeOff } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.hash-text.title'),
  path: '/hash-text',
  description: translate('tools.hash-text.description'),
  keywords: [
    // Core Hash Algorithms (13)
    'hash', 'md5', 'sha1', 'sha256', 'sha224', 'sha512', 'sha384', 'sha3',
    'ripemd160', 'digest', 'checksum', 'hash function', 'cryptographic hash',

    // Hash Use Cases (12)
    'data integrity', 'file verification', 'password hashing', 'digital signature',
    'message digest', 'hash generator', 'hash calculator', 'verify checksum',
    'hash comparison', 'hash validator', 'integrity check', 'hash encoder',

    // Technical Terms (10)
    'one-way hash', 'collision resistant', 'hash algorithm', 'crypto function',
    'secure hash', 'hash value', 'hex digest', 'hash output', 'hash conversion',
    'hash encoding',

    // Developer Context (8)
    'online hash tool', 'hash text online', 'free hash generator', 'web hash tool',
    'client-side hashing', 'browser hash', 'hash utility', 'hash encoder online',

    // Long-tail Keywords (7)
    'calculate md5 hash online', 'sha256 hash generator', 'text to hash converter',
    'online checksum calculator', 'verify file integrity hash', 'generate sha512 hash',
    'hash string online free',
  ],
  component: () => import('./hash-text.vue'),
  icon: EyeOff,
  redirectFrom: ['/hash'],
});
