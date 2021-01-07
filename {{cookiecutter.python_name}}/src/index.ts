import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the {{ cookiecutter.labextension_name }} extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '{{ cookiecutter.labextension_name }}',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension {{ cookiecutter.labextension_name }} is activated!');
    const style = '{{ cookiecutter.labextension_name }}/index.css';

    manager.register({
      name: '{{ cookiecutter.labextension_name }}',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
