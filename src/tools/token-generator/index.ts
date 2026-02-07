import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.token-generator.title'),
  path: '/token-generator',
  description: translate('tools.token-generator.description'),
  keywords: [
    // Core功能关键词
    'token', 'random', 'string', 'generator', 'alphanumeric', 'symbols', 'number', 'letters', 'lowercase', 'uppercase', 'password',
    // 技术关键词
    'UUID', 'GUID', 'unique identifier', 'cryptographic', 'secure token', 'random string generator', 'hash', 'entropy', 'randomness',
    'secret key', 'API key', 'access token', 'session token', 'authentication token', 'authorization', 'security',
    // 使用场景
    'generate password', 'create token', 'random password generator', 'secure password', 'strong password', 'API key generator',
    'session ID', 'transaction ID', 'unique ID', 'random ID generator', 'code generator', 'OTP', 'verification code',
    // 开发相关
    'developer tools', 'online tool', 'web tool', 'free tool', 'browser tool', 'client-side', 'no backend',
    'password manager', 'credential generator', 'secret generator', 'key generator',
    // 长尾关键词
    'generate random string online', 'create secure token', 'random alphanumeric generator', 'password generator online free',
    'secure random token generator', 'unique token generator', 'custom length token', 'random character generator',
    'generate API key online', 'create session token', 'random password with symbols', 'strong password generator',
    'secure credential generator', 'online random string tool', 'free token generator', 'browser-based generator',
  ],
  component: () => import('./token-generator.tool.vue'),
  icon: ArrowsShuffle,
});
