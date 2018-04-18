function addZero(date) {
  const time = date.toString()
  if (time.length < 2) {
    return '0' + time
  } else {
    return time
  }
}
function millisecondsAddZero(date) {
  let time = date
  if (typeof time !== 'string') {
    time = time.toString()
  }
  if (time.length < 3) {
    time = '0' + time
    return millisecondsAddZero(time)
  } else {
    return time
  }
}


module.exports =  function dateTime() {
  const date = new Date()
  const dateTime = addZero(date.getFullYear()) + addZero(date.getMonth()) + addZero(date.getDate()) + addZero(date.getHours()) + addZero(date.getMinutes()) + addZero(date.getSeconds()) + millisecondsAddZero(date.getMilliseconds())
  return dateTime
}