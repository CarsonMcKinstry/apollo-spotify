const fs = require("fs");
const path = require("path");

const srcPath = path.join(__dirname, "./src");
const distPath = path.join(__dirname, "./dist");

function copyGqlFiles(start = srcPath) {
  const srcDir = fs.readdirSync(start, {
    withFileTypes: true,
  });
  for (const obj of srcDir) {
    if (obj.isDirectory()) {
      copyGqlFiles(path.join(start, obj.name));
    } else if (obj.name.endsWith(".graphql")) {
      const p = path.join(start, obj.name);

      fs.copyFileSync(p, p.replace(srcPath, distPath));
    }
  }
}

copyGqlFiles();
