# {{ cookiecutter.extension_name }}

A JupyterLab extension for rendering {{cookiecutter.mimetype_name}} files.

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install {{ cookiecutter.extension_name }}
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
