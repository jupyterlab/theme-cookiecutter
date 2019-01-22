# Making a {{cookiecutter.extension_name}} release

This document guides an extension maintainer through creating and publishing a release of {{cookiecutter.extension_name}}. This process creates a Python source package and a Python universal wheel and uploads them to PyPI.

## Update version number

Update the version number in `_version.py`, and `package.json`.

Commit your changes, add git tag for this version, and push both commit and tag to your origin/remote repo.

## Remove generated files

Remove old Javascript bundle and Python package builds:

```bash
git clean -xfd
```

## Build the package

Build the Javascript extension bundle, then build the Python package and wheel:

```bash
python setup.py sdist
python setup.py bdist_wheel --universal
```

## Upload the package

Upload the Python package and wheel with [twine](https://github.com/pypa/twine). See the Python documentation on [package uploading](https://packaging.python.org/distributing/#uploading-your-project-to-pypi)
for [twine](https://github.com/pypa/twine) setup instructions and for why twine is the recommended uploading method.

```bash
twine upload dist/*
```
