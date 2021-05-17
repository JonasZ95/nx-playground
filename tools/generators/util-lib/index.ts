import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

type Schema = {
  name: string
  directory: "store" | "api" | "shared"
}

export default async function (host: Tree, schema: Schema) {
  const dir = schema.directory;
  await libraryGenerator(host, {
     name: `util-${schema.name}`,
     directory: dir,
     tags: `type:util, scope:${dir}` 
    });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
