type Genre = {
  id: number;
  name: string;
};

function stringFromGanresArray(array: Genre[]) {
  const string = array.reduce((acc, value) => (acc += value.name), '');

  return string.split(/(?=[A-Z])/).join(', ');
}

export default stringFromGanresArray;
