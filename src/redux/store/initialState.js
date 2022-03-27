import React from "react";

const charts = {
  pie: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      }
    ],
  },
  bar: {
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      },
    },
    data: {
      labels: [],
      datasets: [{
        label: 'PROMEDIO DIA SEMANA',
        data: [],
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 159, 64)',
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }],
    }
  }
}

const initialState = {
  ...charts, // use charts here!.
  selectedDate: new Date(),
  showModal: false,
  activeDay: 0,
  createForm: {
    cliente: "",
    agenda: "NATALIA",
    servicios: [{ nombre: "" }],
    telefono: "+57 ",
    porcentaje: 50
  },
  currentWeek: {
    Monday: [],
    Tuesday: [],
    Wednedsay: [],
    Thursday: [],
    Friday: [],
    Saturday: []
  },
  orientation: "horizontal",
  isPhoneAvailable: true,
  isPercentageVisible: true,
  error: "",
  logout: false,
  headerRef: React.createRef(null),
  headerHeight: 0,
}

export default initialState;