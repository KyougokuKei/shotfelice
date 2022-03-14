import React, { useRef, useEffect } from "react";

function useOutsideClicker(ref, onOutsideClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    }
    const eventLisnerName =
      "ontouchstart" in window ? "touchstart" : "mousedown";
    document.addEventListener(eventLisnerName, handleClickOutside);
    return () => {
      document.removeEventListener(eventLisnerName, handleClickOutside);
    };
  }, [ref]);
}

export default function OutsideClicker(props) {
  const wrapperRef = useRef(null);
  useOutsideClicker(wrapperRef, props.onOutsideClick);
  return <div ref={wrapperRef}>{props.children}</div>;
}
