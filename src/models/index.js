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

const MessageStatus = {
  "FAILED": "FAILED",
  "SENT": "SENT"
};

const StylistProfession = {
  "BARBER": "BARBER",
  "HAIRDRESSER": "HAIRDRESSER",
  "BRAIDER": "BRAIDER",
  "COLORIST": "COLORIST"
};

const { Album, Appointment, Service, Blast, BookingPreferences, Chat, ClientHistory, ClientInfo, ClientNotificationPreferences, History, Review, Override, StylistInfo, StylistNotficationPreferences, TimeOff, WorkSchedule, TimeTableType, MessageType } = initSchema(schema);

export {
  Album,
  Appointment,
  Service,
  Blast,
  BookingPreferences,
  Chat,
  ClientHistory,
  ClientInfo,
  ClientNotificationPreferences,
  History,
  Review,
  Override,
  StylistInfo,
  StylistNotficationPreferences,
  TimeOff,
  WorkSchedule,
  AppointmentStatus,
  MessageStatus,
  StylistProfession,
  TimeTableType,
  MessageType
};