"use client";
import PageTitle from "@app/components/PageTitle";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const page = () => {
  const [value, onChange] = useState(new Date());

  return (
    <section>
      <PageTitle title="profile" />
      <Calendar calendarType="Arabic" onChange={onChange} value={value} />
    </section>
  );
};
export default page;
