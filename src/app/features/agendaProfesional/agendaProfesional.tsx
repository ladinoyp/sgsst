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
    start: "2024-12-16T08:00:00",
    end: "2024-12-16T18:00:00",
    status: "Programado",
    empresa: "Empresa 1",
  },
  {
    id: 2,
    title: "Revisión inicial proyecto",
    start: "2024-12-17T09:00:00",
    end: "2024-12-17T12:00:00",
    status: "En proceso",
    empresa: "Empresa 1",
  },
  {
    id: 3,
    title: "Revisión de informes",
    start: "2024-12-18T08:00:00",
    end: "2024-12-18T12:00:00",
    status: "Ejecutada a tiempo",
    empresa: "Empresa 1",
  },
  {
    id: 4,
    title: "Capacitación de seguridad",
    start: "2024-12-19T14:00:00",
    end: "2024-12-19T16:00:00",
    status: "Ejecutada fuera de tiempo",
    empresa: "Empresa 2",
  },
  {
    id: 5,
    title: "Entrega de reportes",
    start: "2024-12-20T08:00:00",
    end: "2024-12-20T12:00:00",
    status: "Retrasada",
    empresa: "Empresa 3",
  },
];

export const AgendaProfesional = () => {
  const router = useRouter();

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
          AGENDA DE ACTIVIDADES PROFESIONAL
        </h1>

        <div className="max-w-[90%] mx-auto bg-color-gray-light rounded-lg shadow-md p-6 text-color-black">
          <div className="w-full">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
              initialView="timeGridWeek"
              locale={esLocale}
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
              scrollTime="08:00:00" // Desplaza el calendario a las 8:00 AM al cargar
              allDaySlot={false} // Elimina la fila "Todo el día"
              events={activities.map((activity) => ({
                id: activity.id.toString(),
                title: `${activity.title} - ${activity.empresa}`,
                start: activity.start,
                end: activity.end,
                color: getStatusColor(activity.status),
              }))}
              eventClick={(info: EventClickArg) => {
                const event = activities.find((a) => a.id.toString() === info.event.id);
                setSelectedEvent(event);
              }}
            />

          </div>
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

      {selectedEvent && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-color-white rounded-lg shadow-lg p-6 w-full max-w-[90%] md:max-w-[50%]">
      <h2 className="text-color-black text-xl font-bold mb-4 text-center">
        EDITAR ACTIVIDAD
      </h2>

      {/* Formulario de edición */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Actividad modificada:", selectedEvent);
          setSelectedEvent(null); // Cierra el modal después de guardar
        }}
      >
        {/* Actividad */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
          <label className="w-full md:w-1/4 text-color-black font-bold mb-2 md:mb-0">
            Actividad:
          </label>
          <input
            type="text"
            className="w-full md:w-3/4 border border-gray-300 rounded px-2 py-1 text-color-black"
            value={selectedEvent.title}
            onChange={(e) =>
              setSelectedEvent({ ...selectedEvent, title: e.target.value })
            }
          />
        </div>

        {/* Empresa */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
          <label className="w-full md:w-1/4 text-color-black font-bold mb-2 md:mb-0">
            Empresa:
          </label>
          <input
            type="text"
            className="w-full md:w-3/4 border border-gray-300 rounded px-2 py-1 text-color-black"
            value={selectedEvent.empresa}
            onChange={(e) =>
              setSelectedEvent({ ...selectedEvent, empresa: e.target.value })
            }
          />
        </div>

        {/* Estado */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
          <label className="w-full md:w-1/4 text-color-black font-bold mb-2 md:mb-0">
            Estado:
          </label>
          <select
            className="w-full md:w-3/4 border border-gray-300 rounded px-2 py-1 text-color-black"
            value={selectedEvent.status}
            onChange={(e) =>
              setSelectedEvent({ ...selectedEvent, status: e.target.value })
            }
          >
            <option value="programado">Programado</option>
            <option value="en proceso">En proceso</option>
            <option value="ejecutada a tiempo">Ejecutada a tiempo</option>
            <option value="ejecutada fuera de tiempo">
              Ejecutada fuera de tiempo
            </option>
            <option value="retrasada">Retrasada</option>
          </select>
        </div>

        {/* Porcentaje de Avance */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
          <label className="w-full md:w-1/4 text-color-black font-bold mb-2 md:mb-0">
            % de Avance:
          </label>
          <input
            type="number"
            className="w-full md:w-3/4 border border-gray-300 rounded px-2 py-1 text-color-black"
            value={selectedEvent.avance || 0}
            min="0"
            max="100"
            onChange={(e) =>
              setSelectedEvent({ ...selectedEvent, avance: e.target.value })
            }
          />
        </div>

        {/* modalidad */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
          <label className="w-full md:w-1/4 text-color-black font-bold mb-2 md:mb-0">
            Modalidad:
          </label>
          <select
            className="w-full md:w-3/4 border border-gray-300 rounded px-2 py-1 text-color-black"
            value={selectedEvent.status}
            onChange={(e) =>
              setSelectedEvent({ ...selectedEvent, status: e.target.value })
            }
          >
            <option value="programado">Presencial</option>
            <option value="en proceso">Virtual</option>
          </select>
        </div>

        {/* Observación */}
        <div className="flex flex-col md:flex-row items-start mb-4">
          <label className="w-full md:w-1/4 text-color-black font-bold mb-2 md:mb-0">
            Observación:
          </label>
          <textarea
            className="w-full md:w-3/4 border border-gray-300 rounded px-2 py-1 text-color-black"
            rows={3}
            value={selectedEvent.observacion || ""}
            onChange={(e) =>
              setSelectedEvent({ ...selectedEvent, observacion: e.target.value })
            }
          />
        </div>

        {/* Adjuntar Archivo */}
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
          <label className="w-full md:w-1/4 text-color-black font-bold mb-2 md:mb-0">
            Adjuntar:
          </label>
          <input
            type="file"
            accept="application/pdf,image/*"
            className="w-full md:w-3/4 border border-gray-300 rounded px-2 py-1 text-color-black"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setSelectedEvent({ ...selectedEvent, hallazgoFile: file });
            }}
          />
        </div>
{/* Botones */}
        <div className="flex justify-center gap-x-4 mt-6">
          <button
            type="button"
            onClick={() => setSelectedEvent(null)}
            className="bg-color-gray-dark text-color-white py-2 px-4 rounded font-bold hover:bg-color-yellow transition"
          >
            Agregar actividad
          </button>
        </div>

        {/* Botones */}
        <div className="flex justify-center gap-x-4 mt-6">
          <button
            type="button"
            onClick={() => setSelectedEvent(null)}
            className="bg-color-orange text-color-white py-2 px-4 rounded font-bold hover:bg-color-yellow transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-color-blue-light text-color-black py-2 px-4 rounded font-bold hover:bg-color-yellow transition"
          >
            Guardar
          </button>
        </div>

      </form>
    </div>
  </div>
)}

    </div>
  );
};
