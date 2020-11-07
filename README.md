# bitrise-stacks

> Fetch and filter latest Bitrise xcode stacks.

## USAGE

```sh
npx pdehaan/bitrise-stacks
```

If you want to include deprecated stacks, you can specify the Boolean `--include-deprecated` CLI arg:

```sh
npx pdehaan/bitrise-stacks --include-deprecated
```

## OUTPUT

```js
[
  {
    "_deprecated": false,
    "_key": "osx-xcode-edge",
    "_semver": "edge",
    "_version": "edge",
    "beta-tag": "",
    "description": "**This stack is updated every week, upgrading the pre-installed tools to the latest versions**.\nIf you need stability / no changes in the environment then this stack is not for you. On the other hand,\nif you love to always use the latest-and-greatest and you don't mind it if you have to upgrade your\nconfigurations when a new version of a tool breaks your workflow, then this is definitely the macOS stack for you!\n*This Edge stack includes the latest **stable** Xcode version. Exact macOS version is the same as on that stack.*\nAlso supports Android SDK and NDK, Cordova, Ionic, Flutter and Ruby (for React Native).",
    "description-link": "https://github.com/bitrise-io/bitrise.io/blob/master/system_reports/osx-xcode-edge.log",
    "pre-installed-tools-link": "https://github.com/bitrise-io/bitrise.io/blob/master/system_reports/osx-xcode-edge.log",
    "project-types": [
      "ios",
      "osx",
      "macos",
      "android",
      "cordova",
      "ionic",
      "react-native",
      "flutter"
    ],
    "title": "Xcode Edge with latest Xcode and tool versions"
  },
  {
    "_deprecated": false,
    "_key": "osx-xcode-12.2.x",
    "_semver": "12.2.0",
    "_version": "12.2.x",
    "beta-tag": "",
    "description": "The latest available `Xcode 12.2.x` (including betas), ...",
    "description-link": "https://github.com/bitrise-io/bitrise.io/blob/master/system_reports/osx-xcode-12.2.x.log",
    "pre-installed-tools-link": "https://github.com/bitrise-io/bitrise.io/blob/master/system_reports/osx-xcode-12.2.x.log",
    "project-types": [...],
    "title": "Xcode 12.2.x, on macOS 10.15.6 (Catalina)"
  },
  {
    "_deprecated": false,
    "_key": "osx-xcode-12.1.x",
    "_semver": "12.1.0",
    "_version": "12.1.x",
    "beta-tag": "",
    "description": "The latest available `Xcode 12.1.x` (including betas), ...",
    "description-link": "https://github.com/bitrise-io/bitrise.io/blob/master/system_reports/osx-xcode-12.1.x.log",
    "pre-installed-tools-link": "https://github.com/bitrise-io/bitrise.io/blob/master/system_reports/osx-xcode-12.1.x.log",
    "project-types": [...],
    "title": "Xcode 12.1.x, on macOS 10.15.6 (Catalina)"
  },
  {
    "_deprecated": false,
    "_key": "osx-xcode-12.0.x",
    "_semver": "12.0.0",
    "_version": "12.0.x",
    "beta-tag": "",
    "description": "The latest available `Xcode 12.0.x` (including betas), ...",
    "description-link": "https://github.com/bitrise-io/bitrise.io/blob/master/system_reports/osx-xcode-12.0.x.log",
    "pre-installed-tools-link": "https://github.com/bitrise-io/bitrise.io/blob/master/system_reports/osx-xcode-12.0.x.log",
    "project-types": [...],
    "title": "Xcode 12.0.x, on macOS 10.15.6 (Catalina)"
  },
  {
    "_deprecated": false,
    "_key": "osx-xcode-11.7.x",
    "_semver": "11.7.0",
    "_version": "11.7.x",
    "beta-tag": "",
    "description": "The latest available `Xcode 11.7.x` (including betas), ...",
    "description-link": "https://github.com/bitrise-io/bitrise.io/blob/master/system_reports/osx-xcode-11.7.x.log",
    "pre-installed-tools-link": "https://github.com/bitrise-io/bitrise.io/blob/master/system_reports/osx-xcode-11.7.x.log",
    "project-types": [...],
    "title": "Xcode 11.7.x, on macOS 10.15.6 (Catalina)"
  },
  {
    "_deprecated": false,
    "_key": "osx-xcode-10.3.x",
    "_semver": "10.3.0",
    "_version": "10.3.x",
    "beta-tag": "",
    "description": "The latest available `Xcode 10.3.x`, ...",
    "description-link": "https://github.com/bitrise-io/bitrise.io/blob/master/system_reports/osx-xcode-10.3.x.log",
    "pre-installed-tools-link": "https://github.com/bitrise-io/bitrise.io/blob/master/system_reports/osx-xcode-10.3.x.log",
    "project-types": [...],
    "title": "Xcode 10.3.x, on macOS 10.14 (Mojave)"
  }
]
```
