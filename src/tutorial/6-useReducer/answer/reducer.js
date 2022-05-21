const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // return initial state-nya, lalu value yang mau diubahnya.
    // ...state, isModalOpen: true, modalContent: 'haha', dll(value yg mau diubah)
    const newItems = [...state.people, action.person];
    return { ...state, people: newItems, isModalOpen: true, modalContent: "person added" };
  }

  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Input cannot be empty!" };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }

  if (action.type === "REMOVE_ITEM") {
    let newPeople = state.people.filter((person) => person.id !== action.person);
    return { ...state, people: newPeople, isModalOpen: true, modalContent: `Person Removed!` };
  }

  // kalau misalkan ga ada action yang sesuai. kita bisa throw error
  return state;
  // throw new Error('No matching action type')
};

export default reducer;
