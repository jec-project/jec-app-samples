# JEC RESTful sample application

The JEC RESTful sample application is a part of the [JavaScript Enterprise Container][jec-url] projects.

[![][jec-logo]][jec-url]

This project shows best practices for creating JEC RESTful applications based on the JavaScript API for RESTful Services _(JARS)_ specification.


The Enterprise JavaScript Project _(EJP)_ for this sample app have been created from the _microservice_ [Wildcat archetypes](https://github.com/jec-project/jec-wildcat-archetypes).

## Requirements

This sample project needs the following system parameters in order to work correctly:

- JEC 1+ _(GlassCat)_
- Node 6+
- npm 3+
- TypeScript 2+

## Installation

Before you download and unzip the project module, you must have a [GlassCat server](https://github.com/jec-project/jec-glasscat) installed.

1. Copy the `rest-api-sample` folder into the GlassCat server `workspace`.
2. Install project dependencies:

```bash
$ cd workspace/rest-api-sample
$ npm install
```

3. Run TypeScript compiler from the `rest-api-sample` EJP.
4. Start the GlassCat server.
5. List projects in workspace and load the `rest-api-sample` EJP.
6. Associate the default server (`server1`) with the `rest-api-sample` EJP.
7. Restart the GlassCat server.

## Update Release Notes

**Current stable release:** [0.9.0](CHANGELOG.md#rest-api-sample-0.9.0)
 
For a complete listing of release notes for all update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

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
[jec-logo]: https://raw.githubusercontent.com/jec-project/JEC/master/assets/jec-logos/jec-logo.png