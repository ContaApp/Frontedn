import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";

function Calendar() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <DatePicker
        views={["year", "month"]}
        label="Mes y Año"
        helperText="With min and max"
        minDate={new Date("2018-03-01")}
        maxDate={new Date("2018-06-01")}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </Fragment>
  );
}

export default Calendar;