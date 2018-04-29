# Book Library Manager Sample Project

The Book Library Manager _(BLM)_ is a part of the [JavaScript Enterprise Container][jec-url] projects.

[![][jec-logo]][jec-url]

BLM is a sample project that shows best practices for creating JEC modular applications based on microservices.
The project is composed of an Angular app which uses REST APIs to call several microservices that render specific data.


All BLM Enterprise JavaScript Projects _(EJPs)_ have been created from the default [Wildcat archetypes](https://github.com/pechemann/jec-wildcat-archetypes).

## The Sample Application

The BLM application we will install is a very basic management system. It will provide users access to a book collection with basic functionalities, such as search, books summary and authors biographies.

![Book Library Manager](https://raw.githubusercontent.com/pechemann/jec-app-samples/master/blm/blm-preview.png "Book Library Manager")

## Requirements

The BLM project needs the following system parameters in order to work correctly:

- JEC 1+ _(GlassCat)_
- Node 6+
- npm 3+
- TypeScript 2+

## Installation

Before you download and unzip the BLM project module, you must have a [GlassCat server](https://github.com/pechemann/jec-glasscat) installed.

1. Copy all projects in the `blm` folder into the GlassCat server `workspace`.
2. Install Angular dependencies:

```bash
$ cd workspace/sample-blm-app/webapp
$ npm install
```

3. Run TypeScript compiler whithin the `sample-blm-app`, `sample-blm-authors`, `sample-blm-books` and `sample-blm-images` EJPs.
4. Start the GlassCat server.
5. create four HTTP tasks and associate each EJP to one task:

```bash
[name/ID:testServer1 - port:3001 - domain:sample-blm-app]
[name/ID:testServer2 - port:3002 - domain:sample-blm-authors]
[name/ID:testServer3 - port:3003 - domain:sample-blm-books]
[name/ID:testServer4 - port:3004 - domain:sample-blm-images]
```

6. Restart the GlassCat server.
7. Go to the app URL: `http://localhost:3001/sample-blm-app`

## Update Release Notes

**Current stable release:** [1.0.3](CHANGELOG.md#blm-1.0.3)
 
For a complete listing of release notes for all BLM update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This BLM Project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

```
Copyright 2016-2018 Pascal ECHEMANN.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[jec-url]: http://jecproject.org
[jec-logo]: https://raw.githubusercontent.com/pechemann/JEC/master/assets/jec-logos/jec-logo.png