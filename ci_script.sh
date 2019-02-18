#!/bin/bash

# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.

set -ex
set -o pipefail

JL_SETTINGS=./.jupyter/lab/user-settings
THEME_SETTINGS=${JL_SET_DIR}/@jupyterlab/apputils-extension/themes.jupyterlab-settings

# Create a theme extension using the cookiecutter default inputs
cookiecutter . --no-input

# install theme
jupyter labextension install ./mytheme

# enable the theme in user-settings
mkdir -p $(dirname $THEME_SET)
cat > THEME_SETTINGS << EOF
{
    "theme": "mytheme"
}
EOF

# print out a confirmation that the extension is installed
jupyter labextension list

# run a test of the main JupyterLab app with the theme enabled
JUPYTERLAB_SETTINGS_DIR=$JL_SETTINGS python -m jupyterlab.browser_check
