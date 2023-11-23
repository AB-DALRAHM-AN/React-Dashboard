import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";


const Calendar = () => {
  return(
    <div className="m-2 md:m-10 mt-24 md: p-10 bg-white rounded-3xl">
      <Header title="Calendar" category="Page" />
      <div>
        <ScheduleComponent
          height="650px"
          eventSettings={{ dataSource: scheduleData }}
          selectedDate={new Date(2021, 0, 10)}
          currentView="Month"
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
      </div>
    </div>
  )
};

export default Calendar;
