"use strict";const path=require("path"),sh=require("shelljs"),renderPug=require("./render-pug"),srcPath=path.resolve(path.dirname(__filename),"../src");function _processFile(e){!e.match(/\.pug$/)||e.match(/include/)||e.match(/mixin/)||e.match(/\/pug\/layouts\//)||renderPug(e)}sh.find(srcPath).forEach(_processFile);
