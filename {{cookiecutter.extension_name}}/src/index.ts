import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';

/**
 * A plugin for {{ cookiecutter.id }}
 */
const plugin: JupyterLabPlugin<void> = {
  id: '{{ cookiecutter.id }}:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: '{{ cookiecutter.extension_name }}',
      isLight: true,
      load: function() {
        return manager.loadCSS('{{ cookiecutter.id }}/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};

export default plugin;
