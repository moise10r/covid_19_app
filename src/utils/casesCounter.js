const casesCounter = (cases) => {
  const totalCases = cases.reduce((a, c) => a + c.confirmed, 0);
  return totalCases.toLocaleString('en-US');
};

export default casesCounter;
