import React, { useRef } from "react";
import { Group, Text, Rect } from "react-konva";
import useGlobal from "../store/index";
export default function Button({
  shape,
  index,
  layoutId,
  screenId,
  paneId,
  paneDimension,
}) {
  const [globalState, globalActions] = useGlobal();
  const rectRef = useRef();
  const { visible, left, right, top, bottom, text, enabled, id, clickable } =
    shape;
  const handleClick = (e) => {
    if (clickable) {
      if (e.evt.button === 0) {
        const values = {
          event: "mouse",
          mouseEvent: "click",
          mouseButton: "left",
          layoutId,
          paneId,
          screenId,
          objectId: id,
        };
        globalActions.sendEvent(values);
      } else if (e.evt.button === 2) {
        const values = {
          event: "mouse",
          mouseEvent: "click",
          mouseButton: "right",
          layoutId,
          paneId,
          screenId,
          objectId: id,
        };
        globalActions.sendEvent(values);
      }
    }
  };
  const handleDbClick = (e) => {
    if (clickable) {
      const values = {
        event: "mouse",
        mouseEvent: "'dblClick'",
        mouseButton: "left",
        layoutId,
        paneId,
        screenId,
        objectId: id,
      };
      globalActions.sendEvent(values);
    }
  };
  return visible ? (
    paneDimension.right >= shape.right &&
    paneDimension.bottom >= shape.bottom &&
    paneDimension.left <= shape.left ? (
      <Group
        className="button"
        key={index}
        onClick={(e) => handleClick(e)}
        onDblClick={(e) => handleDbClick(e)}
      >
        <Rect
          ref={rectRef}
          // fill={fillColor}
          key={index}
          x={left}
          y={top}
          width={right - left}
          height={bottom - top}
          stroke={enabled ? "black" : "gray"}
          strokeWidth={0.5}
        ></Rect>
        <Text
          x={left}
          y={top}
          width={right - left}
          padding={10}
          text={text}
          align={"center"}
          wrap="word"
          fontFamily={"Calibri"}
          fontSize={14}
          fontStyle={"bold"}
          fill={enabled ? "black" : "gray"}
        ></Text>
      </Group>
    ) : null
  ) : null;
}
