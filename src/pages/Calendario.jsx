import React from "react";

function Calendario(){
    return(
        <section class="content-calendar" id="mainContent">
                <section class="calendar-content">
                <div class="calendario" id='calendar'></div>
                </section>
                <script src = "../js/calendar.js"></script>
            </section>
    );
}
export default Calendario;