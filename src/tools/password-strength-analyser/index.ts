import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';
import PasswordIcon from '~icons/mdi/form-textbox-password';

export const tool = defineTool({
  name: translate('tools.password-strength-analyser.title'),
  path: '/password-strength-analyser',
  description: translate('tools.password-strength-analyser.description'),
  keywords: [
    // Core functionality
    'password', 'password strength', 'password analyser', 'password analyzer', 'password checker', 'password tester',
    'strong password', 'weak password', 'password security', 'password validator',

    // Crack time & brute force
    'crack time', 'cracking time', 'password crack time', 'brute force', 'brute force attack', 'time to crack',
    'password cracking', 'hack time', 'password entropy', 'entropy calculator',

    // Hash algorithms
    'md5', 'sha1', 'sha256', 'sha512', 'bcrypt', 'scrypt', 'argon2', 'argon2id', 'argon2i', 'argon2d',
    'hash algorithm', 'hashing algorithm', 'password hash',

    // Password analysis
    'password complexity', 'password estimate', 'password strength meter', 'password score',
    'password analysis', 'password evaluation', 'password quality', 'password rating',

    // Security assessment
    'secure password', 'password security check', 'password vulnerability', 'weak password detector',
    'password strength test', 'password checker online', 'password strength calculator',

    // Best practices
    'password requirements', 'password rules', 'strong password generator', 'password tips',
    'safe password', 'password best practices', 'password strength requirements',
  ],
  component: () => import('./password-strength-analyser.vue'),
  icon: PasswordIcon,
  createdAt: new Date('2023-06-24'),
});
