'use client'
import { Calendar } from "@heroui/calendar";
import { getLocalTimeZone, parseDate, today } from "@internationalized/date";
import { useState } from "react";

export default function SteponeCalendar({selectDay,handleSelectDay}:{selectDay:string,handleSelectDay:(data:any)=>void}){
    
    const datasBloqueadas = ["2025-06-05","2025-06-06"];

    const datasConvertidas = datasBloqueadas.map((data) => parseDate(data));

    let isDateUnavailable = (date:any) =>
    datasConvertidas.some(
      (dataIndisponivel) => {
        const data = new Date(`${date.year}-${date.month}-${date.day}`).getDay()
        if(data == 1 || data == 0 || data == 6) return true
        return date.compare(dataIndisponivel) === 0
    }
    );

    return(
        <>
        <div className="mt-3">
          <h1 className="text-2xl font-bold">Agendamento</h1>
          <p className="px-2">Realize o agendamento da data e hórario da reserva, o restante das informações necessaria será solicitado da etapa seguinte. </p>
        </div>
        <Calendar 
          className="my-5 min-w-[256px]"
          aria-label="Calendário de Agendamento"
          isDateUnavailable={isDateUnavailable}
          minValue={today(getLocalTimeZone()).subtract({days:-1})}
          onChange={handleSelectDay}
        />
        </>
    )
}