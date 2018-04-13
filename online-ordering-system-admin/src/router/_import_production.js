module.exports = filePath => () => import('@/views/' + filePath).then(m => m.default)
// module.exports = filePath => require('@/views/' + filePath).default
