interface IDataPoint {
  name: string;
  prev: number;
  curr: number;
}

const dummyData: IDataPoint[][] = [];

for (let i = 0; i < 3; i += 1) {
  const array = [];
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  for (let j = 0; j < 7; j += 1) {
    array.push({
      name: week[(j + 1) % 7].slice(0, 3),
      prev: Math.round(Math.random() * 10),
      curr: Math.round(Math.random() * 10),
    });
  }
  dummyData.push(array);
}

export default dummyData;
