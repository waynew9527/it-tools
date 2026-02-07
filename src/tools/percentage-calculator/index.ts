import { Percentage } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.percentage-calculator.title'),
  path: '/percentage-calculator',
  description: translate('tools.percentage-calculator.description'),
  keywords: [
    // Core functionality
    'percentage', 'percentage calculator', 'calculate percentage', 'percent calculator', '%', 'percent',
    'percentage tool', 'online percentage calculator', 'percent calculation', 'percentage formula',

    // Calculations
    'percentage increase', 'percentage decrease', 'percentage change', 'percentage difference',
    'find percentage', 'calculate percent of number', 'what is x% of y', 'percentage of value',
    'reverse percentage', 'percent to number', 'number to percent',

    // Math operations
    'percentage math', 'percent formula', 'percentage equation', 'percentage ratio',
    'fraction to percentage', 'decimal to percentage', 'percentage converter',

    // Business & finance
    'discount calculator', 'tax calculator', 'profit margin', 'interest rate', 'markup percentage',
    'sales tax', 'tip calculator', 'commission calculator', 'percentage markup',
    'price increase percentage', 'discount percentage',

    // Statistics & analytics
    'percentage growth', 'growth rate', 'percentage variance', 'percent error',
    'percentage distribution', 'proportion calculator', 'ratio to percentage',

    // Educational
    'percentage problems', 'percentage solver', 'percentage calculator with steps',
    'percentage helper', 'percentage math tool', 'percentage practice',
  ],
  component: () => import('./percentage-calculator.vue'),
  icon: Percentage,
  createdAt: new Date('2023-06-18'),
});
