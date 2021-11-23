const changePosition = (parameters, notes) => {
  const sourceIndex = parameters.source.index;
  const destinationIndex = parameters.destination.index;
  notes.splice(destinationIndex, 0, notes.splice(sourceIndex, 1)[0]);
  return notes;
};

export default changePosition;
