# either.js

Either left or right. Based on Neal Ford's [implementation of Either](https://github.com/nealford/NealFord_FunctionalThinkingVideo_Samples) in his Functional Thinking video series.

## Install

``` bash
  $ npm install either.js
```

## Example


``` js
	function getData() {
		data = getDataFromSomeDataStore();

		if(data)
			return either.right(data);
		else
			return either.left(new Error('The requested data could not be found in the data store.'));
	}

	getData().fold(
		function left(error) {
			console.log(error);
		},
		function right(data) {
			console.log(data);
		}
	);
```

## Tests

Clone this repository from GitHub. Go to the directory that contains the cloned source code and install the devDependencies.

``` bash
  $ npm install
```

Then run the tests.

``` bash
  $ npm run test
```

## License

The MIT License (MIT)

Copyright (c) 2013 Jan Van Ryswyck

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.