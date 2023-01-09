const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('promisse1 - 5000'), 5000);
  });

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('promisse2 - 500'), 500);
  });

const promise3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('promisse3 - 100'), 100);
  });

const promise4 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('promisse4 - 1000'), 1000);
  });

const promisseAsync = async () => {
  const result1 = await promise1();
  const result2 = await promise2();
  const result3 = await promise3();
  const result4 = await promise4();

  console.log(`resolvendo: \n ${result1}, \n ${result2}, \n ${result3}, \n ${result4},`);
};

promisseAsync();
