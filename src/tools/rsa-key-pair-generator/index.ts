import { Certificate } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.rsa-key-pair-generator.title'),
  path: '/rsa-key-pair-generator',
  description: translate('tools.rsa-key-pair-generator.description'),
  keywords: [
    // Core RSA
    'rsa', 'rsa key generator', 'rsa key pair', 'generate rsa keys', 'rsa online', 'rsa key pair generator',
    'public key', 'private key', 'key pair generator', 'asymmetric encryption',

    // Key formats & standards
    'pem format', 'ssh key', 'ssh rsa', 'openssh', 'pkcs1', 'pkcs8', 'x509 certificate',
    'rsa pem', 'private key pem', 'public key pem', 'ssh public key', 'ssh private key',

    // Key sizes
    'rsa 2048', 'rsa 4096', '2048 bit rsa', '4096 bit rsa', '1024 bit rsa', '3072 bit rsa',
    'rsa key length', 'rsa key size',

    // Use cases & applications
    'ssl certificate', 'tls key', 'https certificate', 'server key', 'client certificate',
    'code signing', 'digital signature', 'ssh authentication', 'secure login',

    // Cryptography
    'public key cryptography', 'private key cryptography', 'asymmetric key', 'encryption key',
    'decryption key', 'rsa encryption', 'rsa decryption', 'cryptographic keys',

    // Technical & security
    'secure key generation', 'random key', 'cryptographically secure', 'key generation online',
    'generate ssh key', 'create rsa key', 'rsa key creator', 'rsa key maker',
  ],
  component: () => import('./rsa-key-pair-generator.vue'),
  icon: Certificate,
});
