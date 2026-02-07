import { Artboard } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.ascii-text-drawer.title'),
  path: '/ascii-text-drawer',
  description: translate('tools.ascii-text-drawer.description'),
  keywords: [
    'ascii art generator', 'ascii text generator', 'figlet generator', 'ascii banner maker',
    'text to ascii', 'ascii font converter', 'ascii art creator', 'ascii word art',
    'cli banner generator', 'ascii text art', 'cool text generator', 'retro text generator',
    'code comment art', 'github readme banner', 'ascii letters', 'big text generator',
    'ascii signatures', 'fancy text converter', 'terminal art', 'ascii decorator',
    'ascii symbols', 'ascii characters', 'block text generator', 'bubble text generator',
    'slant font ascii', 'shadow font ascii', '3d ascii art', 'ascii art style',
    'online ascii generator', 'ascii art copy and paste', 'programming tools',
    'developer utilities', 'web design tools', 'creative typography', 'monospaced art',
    'typewriter art', 'ascii graphics', 'large text converter', 'ascii generator for discord',
    'ascii generator for reddit', 'ascii banner tool', 'ascii art maker online',
    'custom ascii fonts', 'figlet fonts online', 'ascii line art', 'ascii script',
    'ascii calligraphy', 'ascii graffiti', 'ascii art editor', 'ascii output',
    'text art generator free', 'ascii text drawer online', 'banner text maker',
  ],
  component: () => import('./ascii-text-drawer.vue'),
  icon: Artboard,
  createdAt: new Date('2024-03-03'),
});
