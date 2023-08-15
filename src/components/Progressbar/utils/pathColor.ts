const pathColor = (value: number) => {
  switch (true) {
    case value >= 75:
      return '#21d07a';
    case value <= 75 && value >= 25:
      return '#d2d531';
    case value <= 25 && value !== 0:
      return '#db2360';
    default:
      return 'gray';
  }
};

export default pathColor;
