import { Palette } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.color-converter.title'),
  path: '/color-converter',
  description: translate('tools.color-converter.description'),
  keywords: [
    // Core functionality
    'color converter', 'color conversion', 'convert color', 'color format converter', 'color code converter',
    'color picker converter', 'color translator', 'color format',

    // Color formats
    'hex to rgb', 'rgb to hex', 'hex color', 'rgb color', 'hsl color', 'hsv color', 'cmyk color',
    'hex color code', 'rgb color code', 'hsl to rgb', 'rgb to hsl', 'hex to hsl', 'hsl to hex',
    'rgba converter', 'hsla converter', 'color values',

    // CSS colors
    'css color', 'css color converter', 'css color names', 'named colors', 'web colors',
    'html colors', 'css color codes', 'color name to hex', 'hex to color name',
    'css hex', 'css rgb', 'css hsl',

    // Design & development
    'color tool', 'color palette', 'design colors', 'color picker', 'color selector',
    'web design colors', 'ui colors', 'color scheme', 'color codes',

    // Conversions
    'color space conversion', 'color model converter', '#ffffff to rgb', 'rgb(255,255,255)',
    'color format changer', 'color code generator', 'color translator online',

    // Use cases
    'frontend color tool', 'developer color tool', 'designer color converter',
    'color code for css', 'color values calculator', 'precise color converter',
  ],
  component: () => import('./color-converter.vue'),
  icon: Palette,
  redirectFrom: ['/color-picker-converter'],
});
