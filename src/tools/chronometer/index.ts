import { TimerOutlined } from '@vicons/material';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.chronometer.title'),
  path: '/chronometer',
  description: translate('tools.chronometer.description'),
  keywords: [
    // Core functionality
    'chronometer', 'stopwatch', 'timer', 'time tracker', 'lap timer', 'online stopwatch',
    'digital stopwatch', 'chronometer online', 'stopwatch online', 'web stopwatch',

    // Use cases
    'measure time', 'track duration', 'time measurement', 'elapsed time', 'timing tool',
    'workout timer', 'exercise stopwatch', 'running timer', 'sports timer', 'race timer',
    'countdown timer', 'interval timer', 'pomodoro timer', 'productivity timer',

    // Features
    'lap counter', 'split timer', 'pause resume', 'multiple laps', 'lap times',
    'precision timer', 'millisecond timer', 'accurate stopwatch', 'precise timing',
    'time recorder', 'duration calculator', 'time logger',

    // Activities & scenarios
    'study timer', 'work timer', 'cooking timer', 'meeting timer', 'presentation timer',
    'meditation timer', 'break timer', 'task timer', 'project timer', 'time tracking',

    // Technical & features
    'browser stopwatch', 'javascript timer', 'html5 stopwatch', 'no download timer',
    'free stopwatch', 'simple timer', 'easy stopwatch', 'minimalist timer',
    'online time keeper', 'clock tool', 'time utility',
  ],
  component: () => import('./chronometer.vue'),
  icon: TimerOutlined,
});
