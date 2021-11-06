const fs = require('fs')
const path = require('path')
const BASE = path.resolve(__dirname, '../')

function getMarkdown(dirname) {
  const dir = fs.readdirSync(dirname)
  return dir
    .filter((item) => item.endsWith('.md'))
    .map((item) => item.substr(0, item.lastIndexOf('.md')))
}

/**
 *
 * @param { string } dirname 目录文件名，
 * @param { { sort?: boolean, withRoot?: boolean, base?: string } } options
 * @default {sort=true}
 * @default {withRoot=false} 如果存在 markdown 文件，则默认会生成 ['']
 * @default {base="blog"} 基础路径，默认会将 blog 作为基础路径
 * @returns { string[] } markdown 文档子节点
 */
function getChildren(dirname, options = {}) {
  const { sort = true, withRoot = false, base = BASE } = options

  // 提取前缀。
  // 如 /frontend/html/ 将提取出 html
  // 如 /frontend/html 将提取出 html
  const _path = dirname.split('/')
  const lastIndex = dirname.endsWith('/') ? _path.length - 2 : _path.length - 1
  const prefix = _path[lastIndex]

  dirname = path.join(base, dirname)
  let mds = getMarkdown(dirname)
  if (!mds.length) {
    return []
  } else {
    mds = mds.filter((item) => item.toLowerCase() !== 'readme')
  }

  if (sort) {
    mds.sort((file1, file2) => {
      const file1LastIndexOfHyper = file1.lastIndexOf('-')
      const file2LastIndexOfHyper = file2.lastIndexOf('-')
      if (file1LastIndexOfHyper === -1 && file2LastIndexOfHyper === -1) {
        return 1
      } else if (file1LastIndexOfHyper !== -1 && file2LastIndexOfHyper !== -1) {
        const order1 =
          Number(file1.substring(file1LastIndexOfHyper + 1, file1.length)) || 0
        const order2 =
          Number(file2.substring(file2LastIndexOfHyper + 1, file2.length)) || 0
        return order1 - order2
      } else {
        return file1LastIndexOfHyper
      }
    })
  }
  mds = mds.map((item) => `${prefix}/${item}`)
  return mds.length ? (withRoot ? ['', ...mds] : mds) : []
}

module.exports = {
  getChildren,
}
