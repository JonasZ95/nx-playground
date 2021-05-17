import { Tree, formatFiles, installPackagesTask, updateJson } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {  
  sortProjects(host, 'workspace.json');
  sortProjects(host, 'nx.json');

  updateJson(host, 'tsconfig.base.json', (json) => {
    json.compilerOptions.paths = sortObjectKeys(json.compilerOptions.paths);
    return json
  });

  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}

const sortProjects = (host: Tree, path: string) =>
  updateJson(host, path, (json) => {
    json.projects = sortObjectKeys(json.projects);
    return json
  });

function sortObjectKeys(obj: any) {
  const sorted = {};
  for(const key of Object.keys(obj).sort()) {
    sorted[key] = obj[key];
  }
  return sorted;
}
