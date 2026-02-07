import { LockSquare } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.bcrypt.title'),
  path: '/bcrypt',
  description: translate('tools.bcrypt.description'),
  keywords: [
    // Core bcrypt functionality
    'bcrypt', 'bcrypt hash', 'bcrypt online', 'bcrypt generator', 'bcrypt compare', 'password hashing',
    'hash password', 'bcrypt algorithm', 'bcrypt encryption', 'bcrypt password hasher',

    // Password security
    'secure password storage', 'password encryption', 'password hash generator', 'salt password',
    'password salting', 'bcrypt salt rounds', 'password security', 'hash verification',
    'password validator', 'password compare', 'verify password hash', 'check bcrypt hash',

    // Technical & implementation
    'bcrypt rounds', 'cost factor', 'work factor', 'adaptive hashing', 'slow hash function',
    'bcrypt javascript', 'bcryptjs', 'bcrypt nodejs', 'bcrypt online tool', 'bcrypt tester',
    'bcrypt hash checker', 'bcrypt hash verifier', 'bcrypt hash matcher',

    // Use cases
    'user authentication', 'login password hash', 'signup password encryption', 'database password storage',
    'secure auth', 'password database', 'credential hashing', 'passphrase encryption',

    // Security & crypto
    'blowfish cipher', 'cryptographic hash', 'one-way hash', 'irreversible encryption',
    'rainbow table resistant', 'brute force resistant', 'hash function', 'crypto tool',
    'password protection', 'data security', 'encryption tool', 'hash algorithm',
  ],
  component: () => import('./bcrypt.vue'),
  icon: LockSquare,
});
