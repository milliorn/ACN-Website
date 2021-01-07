const sh=require("shelljs"),path=require("path"),destPath=path.resolve(path.dirname(__filename),"../dist");sh.rm("-rf",`${destPath}/*`);
