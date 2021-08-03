const moveElement = (array, from, to) => {
  const copy = [...array];
  const valueToMove = copy.splice(from, 1)[0];
  copy.splice(to, 0, valueToMove);
  return copy;
};

export default moveElement;
