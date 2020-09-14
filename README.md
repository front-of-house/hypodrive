# hypodrive

Run [hyposcript](https://github.com/sure-thing/hyposcript) projects (almost) natively.

## Usage

```bash
npx hypodrive ./myprogram.js
```

Alternatively, you can install locally and run node with a prequire flag:

```bash
# install
npm i hypodrive -D

# run
node -r hypodrive path/to/script.js
```

Try it yourself: copy and paste this into your terminal:

```bash
cat <<js > hd.js && npx hypodrive hd.js && rm hd.js
const { h } = require('hyposcript');console.log(<h1>hypodrive</h1>)
js
```

### License

MIT License © [Eric Bailey](https://estrattonbailey.com)
