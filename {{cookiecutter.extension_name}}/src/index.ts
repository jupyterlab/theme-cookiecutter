{%- set extension_id = [cookiecutter.org_name, cookiecutter.extension_name]|join('/') if cookiecutter.org_name else cookiecutter.extension_name -%}

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for {{ extension_id }}
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@{{ extension_id }}:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@{{ extension_id }}/index.css';

    manager.register({
      name: '{{ cookiecutter.extension_name }}',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
