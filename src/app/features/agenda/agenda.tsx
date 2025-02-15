"use client";

import { useState } from "react";
import { Header } from "@/app/shared/header/header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import esLocale from "@fullcalendar/core/locales/es";
import { useRouter } from "next/navigation";

export const Agenda = () => {
  const router = useRouter();

  // Datos de ejemplo para las actividades
  const actividades = [
    {
      id: 1,
      empresa: "Fundacion Universitaria",
      actividad: "Inspección de seguridad",
      fechaProceso: "2025-01-13",
      estado: "Programado",
      asesor: "María Gómez",
      modalidad: "Presencial",
      porcentajeAvance: "10%",
      hht: "",
      evidencia: "https://example.com/evidencia1.pdf",
      observacion: "",
    },
    {
      id: 2,
      empresa: "Fundacion Universitaria",
      actividad: "Capacitación SST",
      fechaProceso: "2025-01-14",
      estado: "A tiempo",
      asesor: "María Gómez",
      modalidad: "Virtual",
      porcentajeAvance: "50%",
      hht: "",
      evidencia: "https://example.com/evidencia1.pdf",
      observacion: "",
    },
    {
      id: 3,
      empresa: "Fundacion Universitaria",
      actividad: "Revisión de documentos",
      fechaProceso: "2025-01-15",
      estado: "A tiempo",
      asesor: "María Gómez",
      modalidad: "Presencial",
      porcentajeAvance: "100%",
      hht: "4",
      evidencia: "https://example.com/evidencia1.pdf",
      observacion: "Se realizo la revisión de documentos planeados, se deja constancia en el informe",
    },
    {
      id: 4,
      empresa: "Fundacion Universitaria",
      actividad: "Auditoría interna",
      fechaProceso: "2025-01-16",
      estado: "Fuera de tiempo",
      asesor: "María Gómez",
      modalidad: "Virtual",
      porcentajeAvance: "75%",
      hht: "5",
      evidencia: "https://example.com/evidencia1.pdf",
      observacion: "Constancia en informe",
    },
    {
      id: 5,
      empresa: "Fundacion Universitaria",
      actividad: "Reunión de seguimiento",
      fechaProceso: "2025-01-18",
      estado: "Retrasada",
      asesor: "María Gómez",
      modalidad: "Virtual",
      porcentajeAvance: "20%",
      hht: "2",
      evidencia: "https://example.com/evidencia1.pdf",
      observacion: "Hubo retraso, debido al tiempo de ejecucion se cruzaba con diferentes actividades",
    },
    {
      id: 6,
      empresa: "Fundacion Universitaria",
      actividad: "Evaluación del SG  de SST",
      fechaProceso: "2025-01-18",
      estado: "En proceso",
      asesor: "Fernando Molina",
      modalidad: "Presencial",
      porcentajeAvance: "",
      hht: "",
      evidencia: "",
      observacion: "",
    },
  ];

  // Estado para manejar el modal
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Programado":
        return "#1E90FF";
      case "En proceso":
        return "#FFFF00";
      case "A tiempo":
        return "#32CD32";
      case "Fuera de tiempo":
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
            events={actividades.map((actividad) => ({
              id: actividad.id.toString(),
              title: actividad.actividad,
              start: actividad.fechaProceso,
              color: getStatusColor(actividad.estado),
            }))}
            eventClick={(info) => {
              const event = actividades.find(
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

      <p className="text-color-black">
        <strong>Empresa:</strong> {selectedEvent.empresa}
      </p>
      <p className="text-color-black">
        <strong>Actividad:</strong> {selectedEvent.actividad}
      </p>
      <p className="text-color-black">
        <strong>Fecha de Proceso:</strong> {selectedEvent.fechaProceso}
      </p>
      <p className="text-color-black">
        <strong>Estado:</strong> {selectedEvent.estado}
      </p>
      <p className="text-color-black">
        <strong>Asesor profesional:</strong> {selectedEvent.asesor}
      </p>
      <p className="text-color-black">
        <strong>Modalidad:</strong> {selectedEvent.modalidad}
      </p>
      <p className="text-color-black">
        <strong>Porcentaje de avance:</strong> {selectedEvent.porcentajeAvance}
      </p>
      <p className="text-color-black">
        <strong>HHT (Horas trabajadas):</strong> {selectedEvent.hht}
      </p>

      {/* Manejo de Evidencia */}
      <div className="text-color-black flex items-center gap-2">
        <strong>Evidencia:</strong>
        {selectedEvent.evidencia ? (
          <a
            href={selectedEvent.evidencia}
            download
            className="text-color-blue hover:underline flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l-3 3m0 0l-3-3m3 3V3m6 18H6a2 2 0 01-2-2V15m16 4v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4"
              />
            </svg>
            Descargar Evidencia
          </a>
        ) : (
          <span className="text-color-gray-dark">No hay evidencia disponible.</span>
        )}
      </div>

      <p className="text-color-black">
        <strong>Observación:</strong> {selectedEvent.observacion}
      </p>
      
      <div className="mt-2 flex justify-center gap-4">
        <button
          onClick={() => alert('Actividad adicional')}
          className="bg-color-orange text-color-black py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
        >
          ACTIVIDAD ADICIONAL
        </button>
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <button
         onClick={() => setSelectedEvent(null)}
          className="bg-color-gray-dark text-color-white py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
        >
          Cerrar
        </button>
        <button
          onClick={() => alert('Guardar cambios')}
          className="bg-color-blue-light text-color-black py-2 px-6 rounded font-bold hover:bg-color-yellow transition"
        >
          Editar
        </button>
      </div>

    </div>
  </div>
)}


 </div>
      
  );
};
