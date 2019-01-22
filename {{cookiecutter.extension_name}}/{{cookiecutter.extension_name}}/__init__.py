from IPython.display import display, JSON
import json

# Running `npm run build` will create static resources in the static
# directory of this Python package (and create that directory if necessary).

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': '{{cookiecutter.extension_name}}',
        'require': '{{cookiecutter.extension_name}}/extension'
    }]

# A display class that can be used within a notebook. 
#   from {{cookiecutter.extension_name}} import {{cookiecutter.mime_short_name}}
#   {{cookiecutter.mime_short_name}}(data)
    
class {{cookiecutter.mime_short_name}}(JSON):
    """A display class for displaying {{cookiecutter.mime_short_name}} visualizations in the Jupyter Notebook and IPython kernel.
    
    {{cookiecutter.mime_short_name}} expects a JSON-able dict, not serialized JSON strings.

    Scalar types (None, number, string) are not allowed, only dict containers.
    """

    def _ipython_display_(self):
        bundle = {
            '{{cookiecutter.mime_type}}': self.data,
            'text/plain': '<{{cookiecutter.extension_name}}.{{cookiecutter.mime_short_name}} object>'
        }
        metadata = {
            '{{cookiecutter.mime_type}}': self.metadata
        }
        display(bundle, metadata=metadata, raw=True) 
