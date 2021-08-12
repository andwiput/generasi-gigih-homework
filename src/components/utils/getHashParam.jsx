export const getHashParamsFromUrl = hash => {
    const paramsUrl = hash.substring(1).split("&")
    const splitParams = paramsUrl.reduce((keyAcc, currentVal) => {
      const [key, value] = currentVal.split("=")
      keyAcc[key] = value
      return keyAcc
    }, {})

    return splitParams;
  }