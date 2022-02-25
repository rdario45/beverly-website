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
      }}>
      {Object.entries(week).map((day) =>
        <Carousel.Item key={day[0]} >
          <div style={{
            width: "80%",
            margin: "auto",
            textAlign: "center",
            // padding: "1em",
            // display: "flex",
            // border: "outset",
            height: "520px",
            paddingRight: "8px",
            paddingLeft: "8px",
            // direction: "rtl",
            overflowY: "auto"
          }}
          className="board">

            {day[1].length > 0 && day[1].filter(agenda => agenda.citas.length > 0).length > 0 ?
              day[1].filter(agenda => agenda.citas.length > 0)
                .map((agenda, key) =>

                  <div key={key}> {agenda.manicurista}
                    <AgendaTable
                      key={key}
                      onDelete={onDelete}
                      onUpdate={onUpdate}
                      {...agenda}
                    />
                  </div>

                ) : 
                <div style={{
                  // alignItems: "center",
                  // height: "420px",
                  // color: "#000",
                  // fontSize: "52px",
                  // border: "outset",
                  // padding: "auto",
                  // margin: "auto",
                  // width: "50%",
                  // border: "3px solid green",
                  paddingTop: "200px",
                }}> Crea una cita </div>}
          </div>
        </Carousel.Item>
      )}
    </Carousel>
  )
}


export default ScheduleWeek;