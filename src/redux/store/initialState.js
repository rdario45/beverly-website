import React from "react";

const initialState = {
    headerRef: React.createRef(null),
    selectedDate: new Date(),
    showModal: false,
    activeDay: 0,
    createForm: {
      cliente: "",
      agenda: "",
      servicios: [{ nombre: "", valoe: 0 }]
    },
    currentWeek: {
      Monday: [],
      Tuesday: [],
      Wednedsay: [],
      Thursday: [],
      Friday: [],
      Saturday: []
    },
    balance: {}
  }

  export default initialState;