import fs from 'fs';
import path from 'path';

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const componentsDir = path.join(__dirname, '..', 'src/components');
const indexFile = path.join(componentsDir, 'index.ts');

const exportStatements = fs
  .readdirSync(componentsDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => {
    const componentDirPath = path.join(componentsDir, dirent.name);
    const hasIndexTs = fs.existsSync(path.join(componentDirPath, 'index.ts'));
    const componentName = capitalizeFirstLetter(dirent.name);

    if (hasIndexTs) {
      const svelteFiles = fs
        .readdirSync(componentDirPath)
        .filter((file) => file.endsWith('.svelte'));

      if (svelteFiles.length === 1) {
        return `export { ${componentName} } from './${dirent.name}';`;
      } else if (svelteFiles.length > 1) {
        return `export * as ${componentName} from './${dirent.name}';`;
      }
    }
    return null;
  })
  .filter(Boolean)
  .join('\n');

fs.writeFileSync(indexFile, exportStatements + '\n');
console.log(`Updated UI exports!`);
