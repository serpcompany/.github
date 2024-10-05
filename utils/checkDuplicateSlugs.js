// checks for duplicate slugs in the frontmatter of astro
// lists all of the duplicate slugs all at once so you can delete them before running pnpm build

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(__dirname, 'src', 'content');

function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

function checkDuplicateSlugs() {
  const files = getAllFiles(contentDir);
  const slugs = {};

  files.forEach((file) => {
    if (path.extname(file) === '.md') {
      const content = fs.readFileSync(file, 'utf8');
      const { data } = matter(content);
      const slug = data.slug || path.basename(file, '.md');

      if (slugs[slug]) {
        slugs[slug].push(file);
      } else {
        slugs[slug] = [file];
      }
    }
  });

  const duplicates = Object.entries(slugs).filter(([_, files]) => files.length > 1);

  if (duplicates.length > 0) {
    console.log('Duplicate slugs found:');
    duplicates.forEach(([slug, files]) => {
      console.log(`\nSlug: ${slug}`);
      files.forEach((file) => console.log(`  ${file}`));
    });
  } else {
    console.log('No duplicate slugs found.');
  }
}

checkDuplicateSlugs();
