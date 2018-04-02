module.exports = filePath => () => import('@/views/' + filePath)
// module.exports = filePath => require('@/views/' + filePath).default
