import React from "react";
import Agenda from "../components/Agenda";

function Calendario(){
    return(
        <section class="content-informacion" id="mainContent">
                <section class="calendar-content">
                <div class="calendario" id='calendar'>
                    <Agenda />
                </div>
                </section>
            </section>
    );
}
export default Calendario;