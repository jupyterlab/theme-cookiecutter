#!/bin/bash

# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.
set -ex
set -o pipefail

# Install JupyterLab and enable the server extension
pip install -q --upgrade pip
pip --version
pip install --pre jupyterlab
pip install cookiecutter
jupyter serverextension enable --py jupyterlab
