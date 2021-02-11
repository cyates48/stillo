import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AppointmentStatus {
  SCHEDULED = "SCHEDULED",
  COMPLETE = "COMPLETE",
  NOSHOW = "NOSHOW",
  CLIENTLATE = "CLIENTLATE",
  STYLISTLATE = "STYLISTLATE",
  CLIENTCANCELLED = "CLIENTCANCELLED",
  STYLISTCANCELLED = "STYLISTCANCELLED"
}



export declare class Appointment {
  readonly id: string;
  readonly status?: AppointmentStatus | keyof typeof AppointmentStatus;
  readonly clientId?: string;
  readonly stylistId?: string;
  readonly dateTime?: string;
  readonly duration?: string;
  readonly Service?: Service;
  constructor(init: ModelInit<Appointment>);
  static copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment>) => MutableModel<Appointment> | void): Appointment;
}

export declare class Service {
  readonly id: string;
  readonly name?: string;
  readonly duration?: string;
  readonly price?: string;
  constructor(init: ModelInit<Service>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}