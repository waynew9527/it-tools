import { Lock } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.encryption.title'),
  path: '/encryption',
  description: translate('tools.encryption.description'),
  keywords: [
    // Core encryption
    'encryption', 'decryption', 'encrypt text', 'decrypt text', 'text encryption', 'online encryption',
    'cipher text', 'encipher', 'decipher', 'crypto tool', 'cryptography online',

    // Algorithms
    'AES encryption', 'AES cipher', 'AES online', 'TripleDES', '3DES encryption', 'Rabbit cipher',
    'RC4 encryption', 'RC4 cipher', 'symmetric encryption', 'block cipher', 'stream cipher',

    // Security & privacy
    'secure text', 'encrypt message', 'private message', 'secret message', 'encrypted communication',
    'data encryption', 'text security', 'password protect text', 'confidential encryption',
    'secure communication', 'encrypt secrets', 'hide text',

    // Use cases
    'encrypt password', 'encrypt credentials', 'encrypt api key', 'sensitive data encryption',
    'encrypt configuration', 'encrypt env variables', 'secure notes', 'encrypted storage',

    // Technical features
    'client-side encryption', 'browser encryption', 'javascript encryption', 'local encryption',
    'no server encryption', 'offline encryption', 'encryption key', 'cipher key',
    'encryption algorithm', 'crypto javascript', 'web cryptography', 'encrypt decrypt online',
    'text cipher tool', 'message encryption tool',
  ],
  component: () => import('./encryption.vue'),
  icon: Lock,
  redirectFrom: ['/cypher'],
});
