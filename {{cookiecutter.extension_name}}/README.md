{%- set extension_id = [cookiecutter.org_name, cookiecutter.extension_name]|join('/') if cookiecutter.org_name else cookiecutter.extension_name -%}

# {{ extension_id }}

{{ cookiecutter.project_short_description }}

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install {{ extension_id }}
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
