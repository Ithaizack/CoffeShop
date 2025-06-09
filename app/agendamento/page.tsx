'use client'

import { AlfiniteIcon, CalendarIcon, NoteregisterIcon, UserAnonyIcon } from "@/components/icons";
import { Button } from "@heroui/button";
import SteponeCalendar from "@/components/Agendamento/StepOne";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AgendamentoPage() {
  
  const [selectDay,setSelectDay] = useState("")
  const [selectPlace, setSelectPlace] = useState("Arraial")
  const [selectHors,setSelectHors] = useState("")
  const router = useRouter()

  const handleSelectPlace = (e:string)=>{
    setSelectPlace(e)
  }

  const handleSelectDay = (data:any)=>{
    const month = data.month < 10 ? `0${data.month}` : data.month
    const day = data.day < 10 ? `0${data.day}` : data.day
    const date = `${data.year}-${month}-${day}`
    setSelectDay(date)
  }

  const handleSelectHors:any = (e:string)=>{
    setSelectHors(e)
  }

  /*
   Função para verificar se tem algum horario ocupado no ambiente selecionado referente a data
  const horaReservadaFunc = dataReservada.map((item)=>{
    if(item.place == selectPlace && item.data == selectDay) return item.hors
    return ''
  })
  */
  return (
    <div className="flex gap-2 px-5 py-10 md:py-0">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex items-center gap-0">
          <span className="border-1 border-gray-200 rounded-full p-1 bg-green-400"><CalendarIcon/></span>
          <p className="font-black text-green-400">{'-----'}</p>
          <span className="border-1 border-gray-200 rounded-full p-1"><AlfiniteIcon/></span>
          <p className="font-black">{'-----'}</p>
          <span className="border-1 border-gray-200 rounded-full p-1"><NoteregisterIcon/></span>
          <p className="font-black">{'-----'}</p>
          <span className="border-1 border-gray-200 rounded-full p-1"><CalendarIcon></CalendarIcon></span>
        </div>
        <div>
          <SteponeCalendar selectDay={selectDay} handleSelectDay={handleSelectDay} ></SteponeCalendar>
        </div>
        <div className="flex gap-5">
          <Button>Voltar</Button>
          <Button className="bg-green-400">Prosseguir</Button>
        </div>
        {/*
        <div className="flex flex-col items-center w-full">
            <Tabs color="success" onSelectionChange={(e:any)=>handleSelectPlace(e)}>
              <Tab key="Arraial" title="Arraial">
                <Card className="w-full py-0">
                  <CardBody className="p-2">  
                    👤 Capacidade máxima de 30/p <br/>
                    contém como cortesia 2+ jarra de água saborizada, 1+ cesta de pães, 1+ prato com mini-brownin e 2+ mimosa ou equivalente!<br/><br/>Valor: R$ 300 
                   </CardBody>
                 </Card>
               </Tab>
               <Tab key="Serra de Minas" title="Serra de Minas">
                <Card className="w-full py-0">
                 <CardBody className="p-2">  
                     👤 Capacidade máxima de 20/p <br/>
                     contém como cortesia 2+ jarra de água saborizada, 1+ cesta de pães!<br/><br/>Valor: R$ 200 
                   </CardBody>
                 </Card>
               </Tab>
               <Tab key="Montanha das palhas" title="Montanha das palhas">
                 <Card className="w-full py-0">
                 <CardBody className="p-2">  
                     👤 Capacidade máxima de 15/p <br/>
                     contém como cortesia 1+ jarra de água saborizada, 1+ cesta de pães!<br/><br/>Valor: R$ 150 
                   </CardBody>
                </Card>
              </Tab>
            </Tabs>
            <Tabs variant="bordered" onSelectionChange={(e):string=>handleSelectHors(e)} color="success" disabledKeys={horaReservadaFunc}>
              <Tab key="10:00" title="10:00" />
              <Tab key="13:00" title="13:00" />
              <Tab key="15:00" title="15:00" />
              <Tab key="17:00" title="17:00" />
            </Tabs>
            <Button
              variant="solid"
              as={Link}
              onClick={sendRoundDinamic}
              className="bg-green-500 my-5"
            >
              Prosseguir
            </Button>
        </div>
        */}
      </div>
  </div>
  );
}
