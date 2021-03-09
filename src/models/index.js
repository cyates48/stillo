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

const { Chat, Appointment, Service, Album } = initSchema(schema);

export {
  Chat,
  Appointment,
  Service,
  Album,
  AppointmentStatus
};