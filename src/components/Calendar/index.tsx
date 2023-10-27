import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import fa from "@fullcalendar/core/locales/fa";
import Frame from "../Calendar-Component/components/Frame";

function Calendar() {
  const events = [
    {
      title: "تست",
      start: "2023-10-20",
      end: "2023-10-23",
    },
  ];

  const handleDateClick = (info: EventClickArg) => {
    openModal(!open);
    setDate(info.dateStr.toString());
  };
  const [date, setDate] = useState("");
  const [open, openModal] = useState(false);

  return (
    <div className="w-[750px]">
      <Frame
        modalIsOpen={open}
        closeModal={() => openModal(false)}
        data={date}
      />
      <FullCalendar
        events={events}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        dateClick={handleDateClick}
        locale={fa}
        eventDidMount={(info) => {
          return;
        }}
      />
    </div>
  );
}

export default Calendar;
