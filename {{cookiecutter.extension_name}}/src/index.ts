{%- set extension_id = [cookiecutter.org_name, cookiecutter.extension_name]|join('/') if cookiecutter.org_name else cookiecutter.extension_name -%}

import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IThemeManager
} from '@jupyterlab/apputils';

/**
 * A plugin for {{ extension_id }}
 */
const plugin: JupyterLabPlugin<void> = {
  id: '{{ extension_id }}:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    manager.register({
      name: '{{ cookiecutter.extension_name }}',
      isLight: true,
      load: function() {
        return manager.loadCSS('{{ extension_id }}/index.css');
      },
      unload: function() {
        return Promise.resolve(void 0);
      }
    });
  },
  autoStart: true
};

export default plugin;
