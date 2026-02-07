import { FileDigit } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.base64-file-converter.title'),
  path: '/base64-file-converter',
  description: translate('tools.base64-file-converter.description'),
  keywords: [
    'base64 file converter', 'base64 image encoder', 'file to base64', 'data uri generator',
    'convert image to base64', 'pdf to base64', 'binary to base64', 'base64 string encoder',
    'online file encoder', 'html img base64', 'css background base64', 'base64 data url',
    'base64 stream converter', 'javascript file to base64', 'secure file encoding',
    'local file converter', 'no upload base64', 'base64 text generator', 'png to base64',
    'jpg to base64', 'svg to base64', 'base64 blob converter', 'base64 arraybuffer',
    'raw data to base64', 'base64 mime type', 'embedded image encoder', 'rfc 4648',
    'base64 decoder and encoder', 'batch base64 converter', 'web developer utilities',
    'frontend development tools', 'optimize image loading', 'data inline base64',
    'base64 format converter', 'file to string', 'convert binary to string', 'base64ify',
    'file encoder online', 'client-side encoding', 'privacy focused converter',
    'base64 tool for devs', 'json image encoder', 'base64 representation', 'convert file to text',
    'base64 output', 'binary data encoder', 'base64 viewer', 'data scheme generator',
    'file upload base64', 'base64 snippet maker',
  ],
  component: () => import('./base64-file-converter.vue'),
  icon: FileDigit,
});
