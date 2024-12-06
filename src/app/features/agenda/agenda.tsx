"use client";

import { useState } from "react";
import { Header } from "@/app/shared/header/header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventClickArg } from "@fullcalendar/core";
import esLocale from "@fullcalendar/core/locales/es";
import { useRouter } from "next/navigation";

const activities = [
  {
    id: 1,
    title: "Planeación del sistema",
    start: "2024-12-07T08:00:00",
    end: "2024-12-07T18:00:00",
    status: "Programado",
    empresa: "Empresa 1",
    funcionario: "Juan Pérez",
  },
  {
    id: 2,
    title: "Revisión inicial proyecto",
    start: "2024-12-06T09:00:00",
    end: "2024-12-06T12:00:00",
    status: "En proceso",
    empresa: "Empresa 1",
    funcionario: "Juan Pérez",
  },
  {
    id: 3,
    title: "Revisión de informes",
    start: "2024-12-10T10:00:00",
    end: "2024-12-10T12:00:00",
    status: "Programado",
    empresa: "Empresa 1",
    funcionario: "Juan Pérez",
  },
  {
    id: 4,
    title: "Capacitación de seguridad",
    start: "2024-12-12T14:00:00",
    end: "2024-12-12T16:00:00",
    status: "Programado",
    empresa: "Empresa 2",
    funcionario: "Ana Gómez",
  },
  {
    id: 5,
    title: "Entrega de reportes",
    start: "2024-12-16T08:00:00",
    end: "2024-12-18T18:00:00",
    status: "Retrasada",
    empresa: "Empresa 3",
    funcionario: "Carlos López",
  },
];

export const Agenda = () => {
  const router = useRouter();

  // Estado para manejar el modal
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Programado":
        return "#1E90FF";
      case "En proceso":
        return "#FFFF00";
      case "Ejecutada a tiempo":
        return "#32CD32";
      case "Ejecutada fuera de tiempo":
        return "#FFA500";
      case "Retrasada":
        return "#FF0000";
      default:
        return "#4B5563";
    }
  };

  return (
    <div className="min-h-screen bg-color-white">
      <Header />

      <main className="p-6">
        <h1 className="text-color-black text-2xl font-bold text-center mb-6">
          AGENDA DE ACTIVIDADES
        </h1>

        <div className="bg-color-gray-light rounded-lg shadow-md p-6 text-color-black">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            locale={esLocale} // Configura el idioma español
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            views={{
              timeGridWeek: { buttonText: "Semana" },
              timeGridDay: { buttonText: "Día" },
              dayGridMonth: { buttonText: "Mes" },
            }}
            events={activities.map((activity) => ({
              id: activity.id.toString(),
              title: `${activity.title} - ${activity.empresa}`,
              start: activity.start,
              end: activity.end,
              color: getStatusColor(activity.status),
            }))}
            eventClick={(info: EventClickArg) => {
              const event = activities.find(
                (a) => a.id.toString() === info.event.id
              );
              setSelectedEvent(event); // Establece el evento seleccionado
            }}
          />
        </div>

        <div className="flex justify-center">
        <button
          onClick={() => router.back()}
          className="mt-6 bg-color-orange text-color-white py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
        >
          Volver
        </button>
      </div>

      </main>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-color-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <h2 className="text-color-black text-xl font-bold mb-4 text-center">
              DETALLES DEL EVENTO
            </h2>

            <p className="text-color-black"><strong>Actividad:</strong> {selectedEvent.title}</p>
            <p className="text-color-black"><strong>Empresa:</strong> {selectedEvent.empresa}</p>
            <p className="text-color-black"><strong>Funcionario:</strong> {selectedEvent.funcionario}</p>
            <p className="text-color-black"><strong>Estado:</strong> {selectedEvent.status}</p>
            <p className="text-color-black">
              <strong>Horario:</strong> {selectedEvent.start} - {selectedEvent.end}
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setSelectedEvent(null); // Restablece el estado
                }}
                className="mt-4 bg-color-orange text-color-white py-2 px-4 rounded font-bold hover:bg-color-yellow transition"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}



    </div>
  );
};
