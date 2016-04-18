# Contributing Guidelines

Contributions welcome!

**Before spending lots of time on something, ask for feedback on your idea first!**

Please search issues and pull requests before adding something new to avoid duplicating efforts and conversations.

This project welcomes non-code contributions, too! The following types of contributions are welcome:

- **Ideas**: participate in an issue thread or start your own to have your voice heard.
- **Writing**: contribute your expertise in an area by helping expand the included content.
- **Copy editing**: fix typos, clarify language, and generally improve the quality of the content.
- **Formatting**: help keep content easy to read with consistent formatting.

## Code Style

[![semistandard][semistandard-image]][semistandard-url]

This repository uses [`semistandard`][semistandard-url] to maintain code style and consistency and avoid style arguments. `npm test` runs `semistandard` so you don't have to!

[standard-image]: https://cdn.rawgit.com/feross/standard/master/badge.svg
[standard-url]: https://github.com/feross/standard
[semistandard-image]: https://cdn.rawgit.com/flet/semistandard/master/badge.svg
[semistandard-url]: https://github.com/Flet/semistandard

# Project Governance

**This is an [OPEN Open Source Project](http://openopensource.org/).**

Individuals making significant and valuable contributions are given commit access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

## Rules

There are a few basic ground rules for collaborators:

1. **No `--force` pushes** or modifying the Git history in any way.
1. **Non-master branches** ought to be used for ongoing work.
1. **External API changes and significant modifications** ought to be subject to an **internal pull request** to solicit feedback from other contributors.
1. Internal pull requests to solicit feedback are *encouraged* for any other non-trivial contribution but left to the discretion of the contributor.
1. Contributors should attempt to adhere to the prevailing code style.

## Releases

Declaring formal releases remains the prerogative of the project maintainer.

# Contributing

Things you can do to contribute include:

1. Report a bug by [opening an issue](https://github.com/OpenGov/geocsv/issues/new)
2. Suggest a change by [opening an issue](https://www.github.com/OpenGov/geocsv/issues/new)
3. Fork the repository and fix [an open issue](https://github.com/OpenGov/geocsv/issues)

## Contributing via Github

The entire project can be found [on Github](https://github.com/OpenGov/geocsv). We use the [fork and pull model](https://help.github.com/articles/using-pull-requests/) to process contributions.

### Fork the Repository

Before contributing, you'll need to fork the repository:

1. Fork the repository so you have your own copy (`your-username/geocsv`)
2. Clone the repo locally with `git clone https://github.com/your-username/geocsv`
3. Move into the cloned repo: `geocsv`
4. Install the project's dependencies: `npm install`

You should also add `OpenGov/geocsv` as a remote at this point. We generally call this remote branch 'upstream':

```
git remote add upstream https://github.com/OpenGov/geocsv
```

#### Submitting a Pull Request

Before submitting a Pull Request please ensure you have completed the following tasks:

1. Describe your changes in `CHANGELOG.md`
2. Make sure your copy is up to date: `git pull upstream master`
3. Ensure that all tests pass, you can run these tests with `npm test`
3. Run `npm run compile`, to compile your changes to the exported `/lib` code.
4. Bump the version in `package.json` as appropriate, see `Versioning` in the section below.
4. Commit your changes
5. Push your changes to your fork: `your-username/geocsv`
6. Open a pull request from your fork to the `upstream` fork (`OpenGov/geocsv`)

## Versioning

This project follows Semantic Versioning.This means that version numbers are basically formatted like `MAJOR.MINOR.PATCH`.

#### Major

Breaking changes are signified with a new **first** number. For example, moving from 1.0.0 to 2.0.0 implies breaking changes.

#### Minor

New components, new helper classes, or substantial visual changes to existing components and patterns are *minor releases*. These are signified by the second number changing. So from 1.1.2 to 1.2.0 there are minor changes.

#### Patches

The final number signifies patches such as fixing a pattern or component in a certain browser, or fixing an existing bug. Small changes to the documentation site and the tooling around the Calcite-Web library are also considered patches.

# Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

* (a) The contribution was created in whole or in part by me and I
  have the right to submit it under the open source license
  indicated in the file; or

* (b) The contribution is based upon previous work that, to the best
  of my knowledge, is covered under an appropriate open source
  license and I have the right under that license to submit that
  work with modifications, whether created in whole or in part
  by me, under the same open source license (unless I am
  permitted to submit under a different license), as indicated
  in the file; or

* (c) The contribution was provided directly to me by some other
  person who certified (a), (b) or (c) and I have not modified
  it.

* (d) I understand and agree that this project and the contribution
  are public and that a record of the contribution (including all
  personal information I submit with it, including my sign-off) is
  maintained indefinitely and may be redistributed consistent with
  this project or the open source license(s) involved.
