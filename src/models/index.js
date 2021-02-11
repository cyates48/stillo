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

const { Appointment, Service } = initSchema(schema);

export {
  Appointment,
  Service,
  AppointmentStatus
};