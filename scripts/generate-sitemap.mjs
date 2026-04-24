import { writeFileSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const domain = 'https://it-tools.eu.cc';
const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Static pages
const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog', priority: '0.9', changefreq: 'weekly' },
];

// Tool paths - extracted from tools index
const toolPaths = [
    '/token-generator',
    '/hash-text',
    '/bcrypt',
    '/uuid-generator',
    '/ulid-generator',
    '/encryption',
    '/bip39-generator',
    '/hmac-generator',
    '/rsa-key-pair-generator',
    '/password-strength-analyser',
    '/pdf-signature-checker',
    '/date-converter',
    '/base-converter',
    '/roman-numeral-converter',
    '/base64-string-converter',
    '/base64-file-converter',
    '/color-converter',
    '/case-converter',
    '/text-to-nato-alphabet',
    '/text-to-binary',
    '/text-to-unicode',
    '/yaml-to-json-converter',
    '/yaml-to-toml',
    '/json-to-yaml-converter',
    '/json-to-toml',
    '/list-converter',
    '/toml-to-json',
    '/toml-to-yaml',
    '/xml-to-json',
    '/json-to-xml',
    '/markdown-to-html',
    '/url-encoder',
    '/html-entities',
    '/url-parser',
    '/device-information',
    '/basic-auth-generator',
    '/meta-tag-generator',
    '/otp-generator',
    '/mime-types',
    '/jwt-parser',
    '/keycode-info',
    '/slugify-string',
    '/html-wysiwyg-editor',
    '/user-agent-parser',
    '/http-status-codes',
    '/json-diff',
    '/safelink-decoder',
    '/qrcode-generator',
    '/wifi-qrcode-generator',
    '/svg-placeholder-generator',
    '/camera-recorder',
    '/git-memo',
    '/random-port-generator',
    '/crontab-generator',
    '/json-prettify',
    '/json-minify',
    '/json-to-csv',
    '/sql-prettify',
    '/chmod-calculator',
    '/docker-run-to-docker-compose-converter',
    '/xml-formatter',
    '/yaml-prettify',
    '/email-normalizer',
    '/regex-tester',
    '/regex-memo',
    '/ipv4-subnet-calculator',
    '/ipv4-address-converter',
    '/ipv4-range-expander',
    '/mac-address-lookup',
    '/mac-address-generator',
    '/ipv6-ula-generator',
    '/math-evaluator',
    '/eta-calculator',
    '/percentage-calculator',
    '/chronometer',
    '/temperature-converter',
    '/benchmark-builder',
    '/lorem-ipsum-generator',
    '/text-statistics',
    '/emoji-picker',
    '/string-obfuscator',
    '/text-diff',
    '/numeronym-generator',
    '/ascii-text-drawer',
    '/phone-parser-and-formatter',
    '/iban-validator-and-parser',
];

// Extract blog slugs
const blogIndexPath = resolve(process.cwd(), 'src', 'blog', 'index.ts');
const blogIndexContent = readFileSync(blogIndexPath, 'utf-8');
const blogSlugs = [];
const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = slugRegex.exec(blogIndexContent)) !== null) {
    blogSlugs.push(match[1]);
}

// Generate sitemap XML
function generateSitemap() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add static pages
    staticPages.forEach(({ path, priority, changefreq }) => {
        xml += '  <url>\n';
        xml += `    <loc>${domain}${path}</loc>\n`;
        xml += `    <lastmod>${lastmod}</lastmod>\n`;
        xml += `    <changefreq>${changefreq}</changefreq>\n`;
        xml += `    <priority>${priority}</priority>\n`;
        xml += '  </url>\n';
    });

    // Add tool pages
    toolPaths.forEach((path) => {
        xml += '  <url>\n';
        xml += `    <loc>${domain}${path}</loc>\n`;
        xml += `    <lastmod>${lastmod}</lastmod>\n`;
        xml += '    <changefreq>monthly</changefreq>\n';
        xml += '    <priority>0.9</priority>\n';
        xml += '  </url>\n';
    });

    // Add blog pages
    blogSlugs.forEach((slug) => {
        xml += '  <url>\n';
        xml += `    <loc>${domain}/blog/${slug}</loc>\n`;
        xml += `    <lastmod>${lastmod}</lastmod>\n`;
        xml += '    <changefreq>monthly</changefreq>\n';
        xml += '    <priority>0.7</priority>\n';
        xml += '  </url>\n';
    });

    xml += '</urlset>';

    return xml;
}

// Write sitemap to public directory
const sitemapContent = generateSitemap();
const outputPath = resolve(process.cwd(), 'public', 'sitemap.xml');

writeFileSync(outputPath, sitemapContent, 'utf-8');

console.log(`✅ Sitemap generated successfully at: ${outputPath}`);
console.log(`📝 Total URLs: ${staticPages.length + toolPaths.length + blogSlugs.length}`);
