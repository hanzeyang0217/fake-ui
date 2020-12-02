// @ts-nocheck
import path from 'path';
import fs from 'fs';
import marked from 'marked';

marked.setOptions({
  highlight: function(code, language) {
    const hljs = require('highlight.js');
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    return hljs.highlight(validLanguage, code).value;
  },
});

export const md = () => {
  return {
    configureServer: [
      async ({app}) => {
        app.use(async (ctx, next) => {
          if (ctx.path.endsWith('.md')) {
            ctx.response.type = 'js';
            const filePath = path.join(process.cwd(), ctx.path); //拼出来path
            ctx.response.body = `export default ${JSON.stringify(marked(
              fs.readFileSync(filePath).toString())
            )}`;
          } else {
            await next();
          }
        });
      },
    ],
    transforms: [{  // 用于 rollup
      test: context => context.path.endsWith('.md'),
      transform: ({code}) => {return `export default ${JSON.stringify(marked(code))}`;}
    }]
  };
};

