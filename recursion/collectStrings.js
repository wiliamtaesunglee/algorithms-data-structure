function collectStrings(obj) {
  const strings = []
  const toString = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        strings.push(obj[key]);
      } else {
        console.log(obj[key])
        toString(obj[key]);
      }
    }
  }

  toString(obj);

  return strings;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

const a = collectStrings(obj) // ["foo", "bar", "baz"])

console.log(a);