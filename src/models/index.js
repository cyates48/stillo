// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AppointmentStatus = {
  "SCHEDULED": "SCHEDULED",
  "COMPLETE": "COMPLETE",
  "NOSHOW": "NOSHOW",
  "CLIENTLATE": "CLIENTLATE",
  "STYLISTLATE": "STYLISTLATE",
  "CLIENTCANCELLED": "CLIENTCANCELLED",
  "STYLISTCANCELLED": "STYLISTCANCELLED"
};

const StylistProfession = {
  "BARBER": "BARBER",
  "HAIRDRESSER": "HAIRDRESSER",
  "BRAIDER": "BRAIDER",
  "COLORIST": "COLORIST"
};

const { ClientNotificationPreferences, ClientInfo, ClientHistory, Chat, Review, History, Appointment, Service, StylistNotficationPreferences, BookingPreferences, Blast, Override, TimeOff, WorkSchedule, Album, StylistInfo } = initSchema(schema);

export {
  ClientNotificationPreferences,
  ClientInfo,
  ClientHistory,
  Chat,
  Review,
  History,
  Appointment,
  Service,
  StylistNotficationPreferences,
  BookingPreferences,
  Blast,
  Override,
  TimeOff,
  WorkSchedule,
  Album,
  StylistInfo,
  AppointmentStatus,
  StylistProfession
};