function rangen(lowerBound, upperBound) {
  if (lowerBound > upperBound)
    throw Error(
      "Invalid range - lower bound should be lesser than upper bound."
    );

  if (lowerBound === upperBound) return lowerBound;

  const bothBoundsPositive = lowerBound >= 0 && upperBound >= 0;
  if (bothBoundsPositive)
    return [...Array(upperBound + 1).keys()].splice(lowerBound);

  const bothBoundsNegative = lowerBound < 0 && upperBound < 0;
  const onlyLowerBoundNegative = lowerBound < 0 && upperBound >= 0;

  const splicingIndex = bothBoundsNegative ? Math.abs(upperBound) : 1;
  const numbers = [...Array(Math.abs(lowerBound) + 1).keys()]
    .splice(splicingIndex)
    .map((number) => number * -1)
    .reverse();

  if (onlyLowerBoundNegative)
    return numbers.concat([...Array(upperBound + 1).keys()]);

  return numbers;
}
