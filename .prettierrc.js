module.exports = {
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  pluginSearchDirs: ["./node_modules"],
  tabWidth: 2,
  useTabs: false,
  importOrder: ["^ramda$", "^@", "^shonad", "^mutty", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
