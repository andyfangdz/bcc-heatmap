export function callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

export function additionalProps(restProps, data) {
  return Object.keys(restProps).reduce((ret, cur) => {
    ret[cur] = callOrValue(restProps[cur], data);
    return ret;
  }, {});
}
