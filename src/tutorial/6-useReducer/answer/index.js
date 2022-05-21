import React, { useState, useReducer, useEffect, useRef } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

// kita pindahin function reducer-nya ke file terpisah.
import reducer from "./reducer";
// karena kita 'export default reducer' di file reducer.js maka tidak perlu menggunakan bracket sewaktu mengimport {}

const initialState = {
  people: data,
  isModalOpen: false,
  modalContent: `Hello World, I'm a modal`,
};

const Index = () => {
  const [name, setName] = useState("");

  // useReducer nge return 2 value
  // bedanya, si useReducer butuh 2 param yaitu (reducer function, default value/initial value)
  // bisa juga langsung inline di useReducer-nya, tapi jadi kurang enak dibaca sih. ex:
  // useReducer(() => 'ini fungsi useReducer', {state1: `ini default state1`, state2: `state2`})
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputNameContainer = useRef();

  useEffect(() => {
    inputNameContainer.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // jika name tidak kosong.
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", person: newPerson });

      // reset input name
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <React.Fragment>
      {/* `state` ini berasal dari [state, dispatch] useReducer. */}
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form onSubmit={handleSubmit} className="form">
        <h3>Add People</h3>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} ref={inputNameContainer} />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", person: id })}>Remove</button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Index;
