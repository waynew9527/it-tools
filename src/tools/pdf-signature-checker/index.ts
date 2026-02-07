import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';
import FileCertIcon from '~icons/mdi/file-certificate-outline';

export const tool = defineTool({
  name: translate('tools.pdf-signature-checker.title'),
  path: '/pdf-signature-checker',
  description: translate('tools.pdf-signature-checker.description'),
  keywords: [
    // Core functionality
    'pdf signature', 'pdf signature checker', 'verify pdf signature', 'pdf signature validator', 'check pdf signature',
    'pdf signature verification', 'validate pdf', 'pdf verification', 'signed pdf', 'digital signature pdf',

    // Digital signatures
    'digital signature', 'electronic signature', 'e-signature', 'signature validation', 'signature verification',
    'certificate validation', 'x509 certificate', 'signing certificate', 'pdf certificate',

    // PDF security
    'pdf security', 'secure pdf', 'authenticated pdf', 'pdf integrity', 'pdf authentication',
    'pdf tamper detection', 'pdf document security', 'pdf trust', 'pdf authenticity',

    // Use cases
    'legal document verification', 'contract verification', 'signed document', 'notarized pdf',
    'pdf signer', 'pdf signing', 'document authentication', 'document integrity',

    // Technical
    'pkcs7', 'cms signature', 'pdf signature standards', 'adobe signature', 'pdf/a signature',
    'timestamp verification', 'signature chain', 'certificate chain', 'trusted certificate',

    // Functionality
    'verify signature online', 'check signature validity', 'signature expiry', 'signature status',
    'pdf signature checker online', 'free pdf signature checker', 'pdf signature tool',
    'signature details', 'signer information', 'certificate information',
  ],
  component: () => import('./pdf-signature-checker.vue'),
  icon: FileCertIcon,
  createdAt: new Date('2023-12-09'),
});
