import { Tree, formatFiles, installPackagesTask, updateJson } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {  
  updateJson(host, 'workspace.json', (workspace) => ({
    defaultProject: 'ui',
    ...workspace
  }))
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}

function  sortObjectKeys(obj: any) {
  const sorted = {};
  for(const key in Object.keys(obj).sort()) {
    sorted[key] = obj[key];
  }
  return sorted;
}
