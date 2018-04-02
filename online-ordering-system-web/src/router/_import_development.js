module.exports = filePath => require('@/views/' + filePath).default
// module.exports = filePath => () => import('@/views/' + filePath)
