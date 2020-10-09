import React from 'react';
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Canvas from './components/Canvas'
import Footer from './components/Footer'
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Header/>
        <Toolbar/>
      <main>
        <Canvas/>
      </main>
      <Footer/>
    </div>
  );
}

/*
Enumerating objects: 53, done.
Counting objects: 100% (47/47), done.
Delta compression using up to 4 threads
Compressing objects: 100% (39/39), done.
Writing objects: 100% (41/41), 5.00 KiB | 465.00 KiB/s, done.
Total 41 (delta 12), reused 0 (delta 0)
remote: Resolving deltas: 100% (12/12), completed with 1 local object.
To github.com:meghein/konva-whiteboard.git
   e14f6f8..b835929  master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
meg@Megs-MacBook-Air konva-whiteboard % npm install
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()
npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
npm WARN deprecated @hapi/joi@15.1.1: joi is leaving the @hapi organization and moving back to 'joi' (https://github.com/sideway/joi/issues/2411)
npm WARN deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/address@2.1.4: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN rm not removing /Users/meg/Projects/konva-whiteboard/node_modules/.bin/jest as it wasn't installed by /Users/meg/Projects/konva-whiteboard/node_modules/jest
npm WARN rm not removing /Users/meg/Projects/konva-whiteboard/node_modules/.bin/rimraf as it wasn't installed by /Users/meg/Projects/konva-whiteboard/node_modules/rimraf
npm WARN rm not removing /Users/meg/Projects/konva-whiteboard/node_modules/.bin/semver as it wasn't installed by /Users/meg/Projects/konva-whiteboard/node_modules/semver
npm WARN rm not removing /Users/meg/Projects/konva-whiteboard/node_modules/.bin/mkdirp as it wasn't installed by /Users/meg/Projects/konva-whiteboard/node_modules/mkdirp
npm WARN rm not removing /Users/meg/Projects/konva-whiteboard/node_modules/.bin/json5 as it wasn't installed by /Users/meg/Projects/konva-whiteboard/node_modules/json5

> fsevents@1.2.13 install /Users/meg/Projects/konva-whiteboard/node_modules/jest-haste-map/node_modules/fsevents
> node install.js

No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

gyp: No Xcode or CLT version detected!
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:351:16)
gyp ERR! stack     at ChildProcess.emit (events.js:315:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:275:12)
gyp ERR! System Darwin 19.5.0
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/meg/Projects/konva-whiteboard/node_modules/jest-haste-map/node_modules/fsevents
gyp ERR! node -v v12.18.3
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok 

> fsevents@1.2.13 install /Users/meg/Projects/konva-whiteboard/node_modules/watchpack-chokidar2/node_modules/fsevents
> node install.js

No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

gyp: No Xcode or CLT version detected!
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:351:16)
gyp ERR! stack     at ChildProcess.emit (events.js:315:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:275:12)
gyp ERR! System Darwin 19.5.0
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/meg/Projects/konva-whiteboard/node_modules/watchpack-chokidar2/node_modules/fsevents
gyp ERR! node -v v12.18.3
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok 

> fsevents@1.2.13 install /Users/meg/Projects/konva-whiteboard/node_modules/webpack-dev-server/node_modules/fsevents
> node install.js

No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLILeo' found at '/'.

No receipt for 'com.apple.pkg.DeveloperToolsCLI' found at '/'.

gyp: No Xcode or CLT version detected!
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:351:16)
gyp ERR! stack     at ChildProcess.emit (events.js:315:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:275:12)
gyp ERR! System Darwin 19.5.0
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/meg/Projects/konva-whiteboard/node_modules/webpack-dev-server/node_modules/fsevents
gyp ERR! node -v v12.18.3
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok 

> node-sass@4.14.1 install /Users/meg/Projects/konva-whiteboard/node_modules/node-sass
> node scripts/install.js

Cached binary found at /Users/meg/.npm/node-sass/4.14.1/darwin-x64-72_binding.node

> core-js@2.6.11 postinstall /Users/meg/Projects/konva-whiteboard/node_modules/babel-runtime/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js@3.6.5 postinstall /Users/meg/Projects/konva-whiteboard/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.6.5 postinstall /Users/meg/Projects/konva-whiteboard/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"


> node-sass@4.14.1 postinstall /Users/meg/Projects/konva-whiteboard/node_modules/node-sass
> node scripts/build.js

Binary found at /Users/meg/Projects/konva-whiteboard/node_modules/node-sass/vendor/darwin-x64-72/binding.node
Testing binary
Binary is fine
npm WARN notsup Unsupported engine for watchpack-chokidar2@2.0.0: wanted: {"node":"<8.10.0"} (current: {"node":"12.18.3","npm":"6.14.6"})
npm WARN notsup Not compatible with your version of node/npm: watchpack-chokidar2@2.0.0
npm WARN font-picker-react@3.5.2 requires a peer of @types/react@^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

added 408 packages from 192 contributors, removed 276 packages, updated 1369 packages and audited 1777 packages in 163.663s

72 packages are looking for funding
  run `npm fund` for details

found 2 vulnerabilities (1 low, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
meg@Megs-MacBook-Air konva-whiteboard % 
*/