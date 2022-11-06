export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_USER':
      return [...state, payload];
    case 'REMOVE_USER':
      return state.filter(({ id }) => id !== payload.id);
    default:
      return console.log('Type is not defined');
  }
};
