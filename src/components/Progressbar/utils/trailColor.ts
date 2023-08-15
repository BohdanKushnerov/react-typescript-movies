const trailColor = (value: number) => {
  switch (true) {
    case value >= 75:
      return '#204529';
    case value <= 75 && value >= 25:
      return '#423d0f';
    case value <= 25 && value !== 0:
      return '#571435';
    default:
      return 'gray';
  }
};

export default trailColor;
