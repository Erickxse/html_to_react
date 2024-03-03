import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/es';




function Agenda() {
  
  return (
    <div>
      <FullCalendar 
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView={'timeGridWeek'}
      headerToolbar={
        {
          start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
          center: 'dayGridMonth,timeGridWeek,timeGridDay',
          end: 'title' // will normally be on the right. if RTL, will be on the left
        }
      }
      locale={esLocale}
      />

      Calendar</div>
  );
}

export default Agenda;