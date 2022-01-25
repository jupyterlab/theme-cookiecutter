# theme-cookiecutter

## Archived

**This project is archived. It is now possible to create a Theme Extension for JupyterLab using the following cookiecutter: https://github.com/jupyterlab/extension-cookiecutter-ts**.

A [cookiecutter](https://github.com/audreyr/cookiecutter) template to help you make new JupyterLab theme extensions.

## Examples

## Usage

Install cookiecutter:

```
pip install cookiecutter
```

Use cookiecutter to generate a package:

```
cookiecutter https://github.com/jupyterlab/theme-cookiecutter
```

## Prompts

The cookiecutter will prompt you with the following questions and generate a project according to your responses:

* `author_name`: Your full name.
* `python_name`: The name of the Python package for your JupyterLab extension (e.g. `jupyterlab_pink_theme`).
* `labextension_name`: Your JupyterLab extension name (e.g. `@my-organization/jupyterlab-pink-theme`).
* `project_short_description`: A short description of your JupyterLab theme extension.
* `has_binder`: Whether you extension has a binder link or not.
* `repository`: Your theme's repository. If the code of your theme is hosted on Github, this should just be the main Github url (e.g. `https://github.com/my-organization/jupyterlab_pink_theme`).

## Project structure

Once you fill in the cookiecutter prompts, you'll get a basic theme extension. The files within are structured as follows:

* `python_name`
    * `style`: The assets (`.css` files, images, etc) that will make up your theme's actual style. This start out with the style from the default Jupyterlab light theme.
    * `src` - The extension source.
        * `index.ts`: Entry point for the JupyterLab extension
    * `package.json`: Metadata files that defines the files in your extension and their dependencies
    * `tsconfig.json`: Tells the TypeScript compiler how to build your extension
    * `setup.py`: The Python distribution file

## Package names

We suggest that extension names start with `jupyterlab_` and use underscores or dashes if needed to improve readability, such as `jupyterlab_myextension`.
