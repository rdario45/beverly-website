import React from "react";

const initialState = {
    headerRef: React.createRef(null),
    selectedDate: new Date(),
    showModal: false,
    activeDay: 0,
    createForm: {
      cliente: "",
      agenda: "",
      servicios: [{ nombre: "", valoe: 0 }],
      telefono: "+ 57 ",
      porcentaje: 100
    },
    currentWeek: {
      Monday: [],
      Tuesday: [],
      Wednedsay: [],
      Thursday: [],
      Friday: [],
      Saturday: []
    },
    balance: {},
    isPhoneAvailable: false,
    isPercentageVisible: false
  }

  export default initialState;