import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  externals: [
    'unocss',
  ],
  // TOOD: import css as string
  // hooks: {
  //   'rollup:options': (_, options) => {
  //     options.plugins = toArray(options.plugins ?? [])
  //     options.plugins!.push(
  //       string({
  //         include: ['**/*.css'],
  //       }),
  //     )
  //   },
  // },
})

// function string(opts: any): InputPluginOption {
//   if (!opts.include)
//     throw new Error('include option should be specified')

//   const filter = createFilter(opts.include, opts.exclude)

//   return {
//     name: 'string',
//     transform(code, id) {
//       if (filter(id)) {
//         return {
//           code: `export default ${JSON.stringify(code)};`,
//           map: { mappings: '' },
//         }
//       }
//     },
//   }
// }
