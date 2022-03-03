import React from 'react';
import AgendaTable from "./AgendaTable";
import { Carousel } from "react-bootstrap";

const CarouselWeekly = ({ week, onDelete, onUpdate, onSelect, activeDay, whatsappIconRefTarget }) => {
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
              margin: "auto",
              textAlign: "center",
              height: "520px",
              paddingRight: "8px",
              paddingLeft: "8px",
              overflowY: "auto"
            }} >
            {day[1].length > 0 && day[1].filter(agenda => agenda.citas.length > 0).length > 0 ?
              day[1].filter(agenda => agenda.citas.length > 0)
                .map((agenda, key) =>
                  <div key={key}> {agenda.manicurista}
                    <AgendaTable
                      key={key}
                      onDelete={onDelete}
                      onUpdate={onUpdate}
                      whatsappIconRefTarget={whatsappIconRefTarget}
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


export default CarouselWeekly;