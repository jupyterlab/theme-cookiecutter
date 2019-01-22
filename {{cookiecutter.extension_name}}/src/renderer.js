import '../style/index.css';

const MIME_TYPE = '{{cookiecutter.mime_type}}';
const CLASS_NAME = 'output_{{cookiecutter.mime_short_name}} rendered_html';

/**
 * Render data to the DOM node
 */
function render(props, node) {
  const text = document.createTextNode(JSON.stringify(props.data));
  node.appendChild(text);
}

/**
 * Handle when an output is cleared or removed
 */
function handleClearOutput(event, { cell: { output_area } }) {
  /* Get rendered DOM node */
  const toinsert = output_area.element.find(CLASS_NAME.split(' ')[0]);
  /* e.g. Dispose of resources used by renderer library */
  // if (toinsert) renderLibrary.dispose(toinsert[0]);
}

/**
 * Handle when a new output is added
 */
function handleAddOutput(event,  { output, output_area }) {
  /* Get rendered DOM node */
  const toinsert = output_area.element.find(CLASS_NAME.split(' ')[0]);
  /** e.g. Inject a static image representation into the mime bundle for
   *  endering on Github, etc.
   */
  // if (toinsert) {
  //   renderLibrary.toPng(toinsert[0]).then(url => {
  //     const data = url.split(',')[1];
  //     output_area.outputs
  //       .filter(output => output.data[MIME_TYPE])
  //       .forEach(output => {
  //         output.data['image/png'] = data;
  //       });
  //   });
  // }
}

/**
 * Register the mime type and append_mime function with the notebook's
 * output area
 */
export function register_renderer(notebook) {
  /* Get an instance of output_area from a CodeCell instance */
  const { output_area } = notebook
    .get_cells()
    .reduce((result, cell) => cell.output_area ? cell : result, {});

  /* A function to render output of '{{cookiecutter.mime_type}}' mime type */
  const append_mime = function(data, metadata, element) {
    /* Create a DOM node to render to */
    const toinsert = this.create_output_subarea(
      metadata,
      CLASS_NAME,
      MIME_TYPE
    );
    this.keyboard_manager.register_events(toinsert);
    /* Render data to DOM node */
    const props = { data, metadata: metadata[MIME_TYPE] };
    render(props, toinsert[0]);
    element.append(toinsert);
    return toinsert;
  };

  /* Handle when an output is cleared or removed */
  output_area.events.on('clear_output.CodeCell', handleClearOutput);

  /* Handle when a new output is added */
  output_area.events.on('output_added.OutputArea', handleAddOutput);

  /**
   * Calculate the index of this renderer in `output_area.display_order`
   * e.g. Insert this renderer after any renderers with mime type that matches
   * "+json"
   */
  // const mime_types = output_area.mime_types();
  // const json_types = mime_types.filter(mimetype => mimetype.includes('+json'));
  // const index = mime_types.lastIndexOf(json_types.pop() + 1);

  /* ...or just insert it at the top */
  const index = 0;

  /**
   * Register the mime type and append_mim function with output_area
   */
  output_area.register_mime_type(MIME_TYPE, append_mime, {
    /* Is output safe? */
    safe: true,
    /* Index of renderer in `output_area.display_order` */
    index: index
  });
}

/**
 * Re-render cells with output data of '{{cookiecutter.mime_type}}' mime type
 */
export function render_cells(notebook) {
  /* Get all cells in notebook */
  notebook.get_cells().forEach(cell => {
    /* If a cell has output data of '{{cookiecutter.mime_type}}' mime type */
    if (
      cell.output_area &&
      cell.output_area.outputs.find(
        output => output.data && output.data[MIME_TYPE]
      )
    ) {
      /* Re-render the cell */
      notebook.render_cell_output(cell);
    }
  });
}
