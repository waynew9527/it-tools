import { Link } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.url-encoder.title'),
  path: '/url-encoder',
  description: translate('tools.url-encoder.description'),
  keywords: [
    // Core functionality
    'url encode', 'url decode', 'url encoder', 'url decoder', 'percent encode', 'percent decode',
    'uri encode', 'uri decode', 'url encoding', 'url decoding', '%20', 'url escape',

    // Query strings & parameters
    'encode url parameters', 'decode url parameters', 'query string encode', 'url params encode',
    'encode special characters', 'escape url', 'url safe string', 'encode spaces', 'encode symbols',

    // Technical terms
    'percent encoding', 'url escaping', 'uri encoding', 'application/x-www-form-urlencoded',
    'encode reserved characters', 'rfc 3986', 'url character encoding', 'html url encode',

    // Use cases
    'encode link', 'safe url', 'url formatter', 'url converter', 'url string encoder',
    'encode for url', 'make url safe', 'url query encoder', 'encode pathname',

    // Programming & development
    'javascript url encode', 'encodeURIComponent', 'encodeURI', 'urlencode',
    'url encode online', 'url decode online', 'web url encoder', 'api url encode',

    // Common encodings
    'encode space to %20', 'encode & in url', 'encode # in url', 'encode ? in url',
    'encode / in url', 'encode + in url', 'url special characters',

    // Tools & utilities
    'url encode tool', 'url decode tool', 'online url encoder', 'free url encoder',
    'browser url encoder', 'encode decode url', 'url string converter',
  ],
  component: () => import('./url-encoder.vue'),
  icon: Link,
});
