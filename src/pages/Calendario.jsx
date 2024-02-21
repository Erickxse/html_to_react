import React from "react";

class Calendario extends React.Component{
    render(){
        return(
            <section class="content" id="mainContent">
                <section class="calendar-content">
                <div class="calendario" id='calendar'></div>
                </section>
                <script src = "../js/calendar.js"></script>
            </section>
        );
    }
}

export default Calendario;