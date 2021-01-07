"use strict";const fs=require("fs"),path=require("path"),pug=require("pug"),sh=require("shelljs"),prettier=require("prettier");module.exports=function(e){const r=e.replace(/src\/pug\//,"dist/").replace(/\.pug$/,".html"),t=path.resolve(path.dirname(__filename),"../src");console.log(`### INFO: Rendering ${e} to ${r}`);const i=pug.renderFile(e,{doctype:"html",filename:e,basedir:t}),s=path.dirname(r);sh.test("-e",s)||sh.mkdir("-p",s);const p=prettier.format(i,{printWidth:1e3,tabWidth:4,singleQuote:!0,proseWrap:"preserve",endOfLine:"lf",parser:"html",htmlWhitespaceSensitivity:"ignore"});fs.writeFileSync(r,p)};
