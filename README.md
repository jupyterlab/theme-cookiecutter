# theme-cookiecutter-ts

[![Build Status](https://travis-ci.org/jupyterlab/theme-cookiecutter-ts.svg?branch=master)](https://travis-ci.org/jupyterlab/theme-cookiecutter-ts) [![Build Status](https://dev.azure.com/jupyterlab/jupyterlab/_apis/build/status/jupyterlab.jupyterlab?branchName=master)](https://dev.azure.com/jupyterlab/jupyterlab/_build/latest?definitionId=1&branchName=master)


A [cookiecutter](https://github.com/audreyr/cookiecutter) template to help you make new JupyterLab theme extensions.

## Examples

## Usage

Install cookiecutter:

```
pip install cookiecutter
```

Use cookiecutter to generate a package:

```
cookiecutter https://github.com/jupyterlab/theme-cookiecutter-ts
```

## Prompts

The cookiecutter will prompt you with the following questions and generate a project according to your responses:
  
* `author_name`: Your full name.
* `author_email`: Your email address.
* `extension_name`: Your JupyterLab extension name (e.g. `jupyerlab_json`, `jupyerlab_geojson`).
* `org_name`: (optional) The name of your organization. If specified the full name of your extension will be `@org/extension_name` (e.g. `@telamonian/theme-darcula`, `@jupyterlab/jupyterlab-pink`).
* `homepage`: (optional) Your theme's homepage. If the code of your theme is hosted on Github, this should just be the main Github url (e.g. `https://github.com/telamonian/theme-darcula`).
* `project_short_description`: A short description of your JupyterLab theme extension.

## Project structure

Once you fill in the cookiecutter prompts, you'll get a basic theme extension (which will have the same look as the default JupyterLab light theme). The files within are structured as follows:

* `extension_name`
    * `style`: The assets (`.css` files, images, etc) that will make up your theme's actual style. This start out with the style from the default Jupyterlab light theme.
    * `src` - The extension source.
        * `index.ts`: Entry point for the JupyterLab extension
    * `package.json`: Metadata files that defines the files in your extension and their dependencies
    * `tsconfig.json`: Tells the TypeScript compiler how to build your extension

## Package names  

We suggest that extension names start with `jupyterlab_` and use underscores or dashes if needed to improve readability, such as `jupyterlab_myextension`.
