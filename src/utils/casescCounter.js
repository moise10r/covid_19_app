const casesCounter = (cases) => {
  const totalCases = cases.reduce((a, c) => a + c.confirmed, 0);
  return totalCases;
};

export default casesCounter;
