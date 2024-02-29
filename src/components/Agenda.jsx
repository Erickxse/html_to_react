import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


function Agenda() {
  
  return (
    <div>
      <FullCalendar 
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView={''}
      />

      Calendar</div>
  );
}

export default Agenda;