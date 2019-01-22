# theme-cookiecutter-ts

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
  
* `author_name`: Your full name. This will be used in the generated Python and npm packages.
* `author_email`: Your email address. This will be used in the generated Python and npm packages.
* `extension_name`: Your JupyterLab extension name (e.g. `jupyerlab_json`, `jupyerlab_geojson`).
* `org_name`: (optional) The name of your organization. If specified the full name of your extension will be `@org/name` (e.g. `@telamonian/theme-darcula`, `@jupyterlab/jupyterlab-pink`).

## Project structure

The project is divided into 2 top-level directories, one for each extension (lab and notebook). 

* `extension_name`
    * `style`: The assets (`.css` files, images, etc) that will make up your theme's actual style. This start out with the style from the default Jupyterlab Light theme.
    * `src` - The extension source.
        * `index.js`: Entry point for the Jupyter Notebook extension
    * `package.json`: Metadata files that defines the files in your extension and their dependencies
    * `tsconfig.json`: Tells the TypeScript compiler how to build your extension
    * `webpack.config.js`: Minifies the files in the installed version of your theme

## Workflow

This cookiecutter will change over time to adapt to API changes and best practices, so you should be able to rebase your extension from an updated version of the cookiecutter. The following is the recommended workflow: 

![workflow](workflow.png)

* Create a branch called `cookiecutter` that will serve as the base for another branch called `develop`. All feature branches shoud be based on `develop` and merged into `master`. 
* When a new version of mimerender-cookiecutter is available:
    * Checkout `cookiecutter` branch: `git checkout cookiecutter`
    * Re-run the cookiecutter command from the repository root: `cookiecutter https://github.com/jupyterlab/mimerender-cookiecutter [--checkout BRANCH_NAME] --output-dir .. --config-file .cookiecutter.yaml --no-input --overwrite-if-exists`
        * `--checkout` is optional and specifies a branch of mimerender-cookiecutter to checkout (e.g. `react`). 
        * `--output-dir ..` allows us to run the cookiecutter in the repo root vs. the parent directory because cookiecutter will always render output in a child directory of the `output-dir`.
        * `--config-file .cookiecutter.yaml` will run the cookiecutter with the original inputs which are persisted to `.cookiecutter.yaml` in the repo root.
        * `--no-input` will skip the cookiecutter prompts.
        * `--overwrite-if-exists` will replace our previous cookiecutter output with the most up-to-date output.
    *  Commit these changes to `cookiecutter` with a message like "mimerender-cookiecutter [VERSION_NUMBER]": `git commit -m "mimerender-cookiecutter [VERSION_NUMBER]"`
    * Checkout the `develop` branch: `git checkout develop`
    * Rebase it from `cookiecutter`: `git rebase cookiecutter`
        * You may encounter some merge conflicts, so resolve them and complete the rebase using `git rebase --continue`
    * Publish a new version of your extension by following the instructions in `RELEASE.md`.

## Package names  

We suggest that extension names start with `jupyterlab_` and use underscores if needed to improve readability, such as `jupyterlab_myextension`.
