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
