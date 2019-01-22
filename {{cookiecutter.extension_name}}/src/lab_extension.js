import {
  Widget
} from '@phosphor/widgets';

import '../style/index.css';


/**
 * The default mime type for the extension.
 */
const MIME_TYPE = '{{cookiecutter.mime_type}}';


/**
 * The class name added to the extension.
 */
const CLASS_NAME = 'jp-OutputWidget{{cookiecutter.mime_short_name}}';


/**
 * A widget for rendering {{cookiecutter.mime_short_name}}.
 */
export
class OutputWidget extends Widget {
  /**
   * Construct a new output widget.
   */
  constructor(options) {
    super();
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
  }

  /**
   * Render {{cookiecutter.mime_short_name}} into this widget's node.
   */
  renderModel(model) {
    this.node.textContent = model.data[this._mimeType];
  }
}


/**
 * A mime renderer factory for {{cookiecutter.mime_short_name}} data.
 */
export
const rendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  createRenderer: options => new OutputWidget(options)
};


const extension = {
  name: '{{cookiecutter.mime_short_name}}',
  rendererFactory,
  rank: 0,
  dataType: 'json',
{%- if cookiecutter.use_file_type == "yes" -%}
  documentWidgetFactoryOptions: {
    name: '{{cookiecutter.mime_short_name}}',
    primaryFileType: '{{cookiecutter.file_type}}',
    fileTypes: ['{{cookiecutter.file_type}}'],
    defaultFor: []
  },
  fileTypes: []
{% endif %}
};

export default extension;
