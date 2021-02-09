// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Appointment, Service } = initSchema(schema);

export {
  Appointment,
  Service
};