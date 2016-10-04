function parsePromised(data) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(JSON.parse(data));
    } catch (e) {
      reject(e);
    }
  });
}

parsePromised(process.argv[1])
  .then(null, console.log);
