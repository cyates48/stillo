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



export declare class Chat {
  readonly id: string;
  readonly stylistId?: string;
  readonly clientId?: string;
  readonly messages?: string;
  constructor(init: ModelInit<Chat>);
  static copyOf(source: Chat, mutator: (draft: MutableModel<Chat>) => MutableModel<Chat> | void): Chat;
}

export declare class Appointment {
  readonly id: string;
  readonly status?: AppointmentStatus | keyof typeof AppointmentStatus;
  readonly clientId?: string;
  readonly stylistId?: string;
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

export declare class Album {
  readonly id: string;
  readonly albumCoverPhoto?: string;
  readonly name?: string;
  constructor(init: ModelInit<Album>);
  static copyOf(source: Album, mutator: (draft: MutableModel<Album>) => MutableModel<Album> | void): Album;
}