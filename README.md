# tailwind-merge-issue

this repo is to show an issue that tailwind-merge does not correctly merge
two utility classes:

- text-red-600 (styling font color)
- text-tremor-default (styling font size)

only the class that is listed at the end will remain in the output, even tough both should be kept.

see the test compontent `Test` for demonstration of the problem in `main.tsx`.


# volta

volta is a node version management tool. it helps installing and switching to the desired node version.
https://volta.sh/

```sh
volta install node
volta install npm@bundled
```

installation of dependencies (do so initially and when dependencies have changed)

```sh
npm install
```

start frontend

```sh
npm run dev
```

stuff to do from time to time

```sh
npm install
npm outdated
npm update
npm audit
```

to bump package to latest version including breaking changes

```sh
npm install <package>@latest
```

# build

build for production:

```sh
npm run build
```
