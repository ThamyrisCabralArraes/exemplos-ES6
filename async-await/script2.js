const luffyStatus = 'triste';

const isLuffyHappy = new Promise((resolve, reject) => {
  switch (luffyStatus) {
    case 'feliz':
      resolve({
        message: 'Feliz',
      });
      break;
    case 'entediado':
      reject({
        message: 'Entediado',
      });
      break;
    case 'triste':
      reject({
        message: 'Triste',
      });
      break;
  }
});

isLuffyHappy
  .then((responde) => console.log(`resposta ${responde.message}`))
  .catch((err) => console.log(`resposta: ${err.message}`));
