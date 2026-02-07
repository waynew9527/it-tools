import { AlignJustified } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.bip39-generator.title'),
  path: '/bip39-generator',
  description: translate('tools.bip39-generator.description'),
  keywords: [
    // Core BIP39
    'bip39', 'bip39 generator', 'bip39 mnemonic', 'bip39 passphrase', 'bip39 seed', 'bip39 online',
    'mnemonic generator', 'seed phrase generator', 'recovery phrase generator', 'backup phrase',

    // Cryptocurrency wallets
    'bitcoin mnemonic', 'ethereum seed phrase', 'crypto wallet seed', 'wallet recovery phrase',
    'bitcoin seed phrase', 'crypto mnemonic', 'wallet backup phrase', 'hd wallet seed',
    'hierarchical deterministic wallet', 'master seed phrase',

    // Security & recovery
    'wallet recovery', 'seed backup', 'mnemonic backup', 'crypto recovery phrase',
    'wallet restore', 'seed phrase backup', '12 word seed', '24 word seed', '12 word phrase',
    '24 word phrase', '12 word mnemonic', '24 word mnemonic',

    // Technical terms
    'entropy generator', 'cryptographic seed', 'deterministic wallet', 'bip32', 'bip44',
    'derivation path', 'master key', 'seed entropy', 'random entropy', 'secure seed',

    // Blockchain & crypto
    'bitcoin wallet seed', 'ethereum wallet seed', 'crypto seed generator', 'blockchain wallet seed',
    'hardware wallet seed', 'ledger seed phrase', 'trezor seed phrase', 'metamask seed',

    // Functionality
    'generate mnemonic', 'create seed phrase', 'random mnemonic', 'secure mnemonic generator',
    'bip39 word list', 'mnemonic word list', 'seed phrase words', 'recovery words',
  ],
  component: () => import('./bip39-generator.vue'),
  icon: AlignJustified,
});
