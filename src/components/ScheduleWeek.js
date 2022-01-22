import React from 'react';
import AgendaTable from "./AgendaTable";
import { Carousel } from "react-bootstrap";

const ScheduleWeek = ({ week, onDelete, onUpdate, onSelect, activeDay }) => {
  return (
    <Carousel
      onSelect={onSelect}
      activeIndex={activeDay}
      interval={null}
      style={{
        height: "100%"
      }}
    >
      {Object.entries(week).map((day) =>      
        <Carousel.Item key={day[0]} >
          <div style={{
            width: "80%",
            margin: "auto",
            textAlign: "center"
          }}>
            {day[1].length > 0 ? day[1].map((agenda, key) =>
              <div key={key}> {agenda.manicurista}
                <AgendaTable
                  key={key}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                  {...agenda}
                />
              </div>
            ) : <div style={{
              alignItems: "center",
              height: "100%"
            }}> Crea una cita </div>}
          </div>
        </Carousel.Item>
      )}
    </Carousel>
  )
}


export default ScheduleWeek;