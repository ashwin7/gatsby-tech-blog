import fs from 'fs';
import path from 'path';

const SRC_DIR = '/Users/ashwinsaxena/Code/Blogs/gatsby-tech-blog/src/pages/blog';
const DEST_DIR = '/Users/ashwinsaxena/Code/Blogs/ashwins-blog/src/content/posts/en';

const files = fs.readdirSync(SRC_DIR);

for (const file of files) {
  if (!file.endsWith('.md')) continue;

  const content = fs.readFileSync(path.join(SRC_DIR, file), 'utf-8');
  
  // Extract frontmatter
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);
  if (!match) continue;
  
  const frontmatter = match[1];
  const body = match[2];
  
  // Parse fields safely
  const getField = (key) => {
    const rx = new RegExp(`^${key}:\\s*(.+)`, 'm');
    const m = frontmatter.match(rx);
    if (!m) return '';
    let val = m[1].trim();
    // remove surrounding quotes
    if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
      val = val.slice(1, -1);
    }
    return val;
  };
  
  const title = getField('title') || 'Untitled';
  const desc = getField('description') || '';
  
  // Parse date
  let dateRaw = getField('date');
  let pubDate = '';
  if (dateRaw) {
    pubDate = dateRaw.split('T')[0];
  }
  
  // Parse tags -> categories
  const tagsMatch = frontmatter.match(/^tags:\n([\s\S]*?)(?:^[\w-]+:|\n---|$)/m);
  let categoriesStr = '[Tech]';
  if (tagsMatch) {
    const tagsStr = tagsMatch[1];
    const tags = tagsStr.split('\n')
      .map(line => line.replace(/^- /, '').trim())
      .filter(Boolean)
      .map(t => {
         let sanitized = t;
         if (sanitized.startsWith("'") || sanitized.startsWith('"')) sanitized = sanitized.slice(1, -1);
         return `'${sanitized.replace(/'/g, "''")}'`;
      });
    if (tags.length > 0) {
      categoriesStr = `[${tags.join(', ')}]`;
    }
  }
  
  // Parse featured image
  const imgRaw = getField('featuredimage');
  let finalImg = '';
  if (imgRaw) {
    const imgName = path.basename(imgRaw);
    finalImg = `./images/tech-blog-img/${imgName}`;
  }
  
  let newFrontmatter = `---
title: '${title.replace(/'/g, "''")}'
pubDate: ${pubDate || '2020-01-01'}
categories: ${categoriesStr}
`;

  if (desc) {
     newFrontmatter += `description: '${desc.replace(/'/g, "''")}'\n`;
  } else {
     newFrontmatter += `description: '${title.replace(/'/g, "''")}'\n`;
  }
  
  if (finalImg) {
    newFrontmatter += `heroImage: '${finalImg}'\n`;
  }
  newFrontmatter += `---\n`;
  
  fs.writeFileSync(path.join(DEST_DIR, file), newFrontmatter + body);
  console.log(`Successfully migrated ${file}`);
}
