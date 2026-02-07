import { Markdown } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.markdown-to-html.title'),
  path: '/markdown-to-html',
  description: translate('tools.markdown-to-html.description'),
  keywords: [
    // Core functionality
    'markdown to html', 'markdown html converter', 'convert markdown', 'md to html',
    'markdown converter', 'markdown parser', 'html from markdown', 'markdown transformation',

    // Markdown syntax
    'markdown syntax', 'markdown format', 'markdown language', 'markdown formatting',
    'github markdown', 'commonmark', 'markdown flavored', 'gfm',

    // HTML operations
    'markdown to html online', 'md to html converter', 'markdown renderer',
    'html generator', 'markdown preview', 'markdown viewer', 'render markdown',

    // PDF operations
    'markdown to pdf', 'convert markdown to pdf', 'print markdown', 'markdown pdf export',
    'save as pdf', 'pdf from markdown', 'markdown document to pdf',

    // Use cases
    'parse markdown', 'markdown processor', 'markdown compiler', 'markdown builder',
    'readme converter', 'documentation converter', 'markdown documentation',

    // Technical
    'markdown parser online', 'html renderer', 'markdown to html string',
    'markdown compiler online', 'markdown processor online',

    // Programming
    'markdown in javascript', 'markdown in python', 'markdown library',
    'marked.js', 'showdown', 'commonmark.js', 'markdown-it',

    // Features
    'markdown editor', 'live markdown preview', 'markdown syntax highlighting',
    'markdown formatting online', 'markdown to html free', 'online markdown converter',
  ],
  component: () => import('./markdown-to-html.vue'),
  icon: Markdown,
  createdAt: new Date('2024-08-25'),
});
