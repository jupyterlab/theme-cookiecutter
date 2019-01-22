import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';


/**
 * A plugin for the {{title}}
 */
const plugin: JupyterLabPlugin<void> = {
  id: '{{name}}:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: '{{title}}',
      isLight: true,
      load: function() {
        return manager.loadCSS('{{name}}/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};


export default plugin;
