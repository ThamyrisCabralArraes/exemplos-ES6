const newPromise = new Promise((resolve, reject) => {
  let sum = 1 + 3;
  if (sum === 3) {
    resolve('Deu certo');
  } else {
    reject('Deu erro');
  }
});

console.log('.....');
newPromise
  .then((result) => {
    console.log(`resultado do then: ${result}`);
  })
  .catch((erro) => {
    console.log(`resultado do catch: ${erro}`);
  })
  .finally(() => {
    console.log('Fim');
  });
