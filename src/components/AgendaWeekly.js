import React from 'react';
import BeverlyAgenda from "./BeverlyAgenda";
import { Carousel } from "react-bootstrap";

const AgendaWeekly = ({ week, onDelete, onUpdate, onSelect, activeDay }) => {
  return (
    <Carousel
      onSelect={onSelect}
      activeIndex={activeDay}
      interval={null}
      style={{
        height: "100%"
      }}>

      {Object.entries(week).map((day) =>

        <Carousel.Item key={day[0]} >
          <div className="board"
            style={{
              width: "80%",
              height: "100%",
              margin: "auto",
              textAlign: "center",
              paddingRight: "8px",
              paddingLeft: "8px",
              overflowY: "auto"
            }} >

            {day[1].length > 0 && day[1].filter(agenda => agenda.citas.length > 0).length > 0 ?

              day[1].filter(agenda => agenda.citas.length > 0)

                .map((agenda, key) =>

                  <div key={key}>

                    <b>{agenda.manicurista}</b>

                    <BeverlyAgenda
                      key={key}
                      onDelete={onDelete}
                      onUpdate={onUpdate}
                      {...agenda}
                    />
                  </div>
                ) :
              <div style={{
                paddingTop: "200px",
              }}> Crea una cita </div>}
          </div>

        </Carousel.Item>

      )}
    </Carousel>
  )
}


export default AgendaWeekly;