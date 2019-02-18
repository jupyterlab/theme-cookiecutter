#!/bin/bash

# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.

set -ex
set -o pipefail

# Make sure we can create, install, and run the default theme extension created by the cookiecutter
cookiecutter . --no-input
jupyter labextension install ./mytheme
python -m jupyterlab.browser_check
jupyter labextension list
