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

export enum StylistProfession {
  BARBER = "BARBER",
  HAIRDRESSER = "HAIRDRESSER",
  BRAIDER = "BRAIDER",
  COLORIST = "COLORIST"
}



export declare class ClientNotificationPreferences {
  readonly id: string;
  readonly appointmentStatusChanged?: boolean;
  readonly messageReceived?: boolean;
  readonly appointmentReminder?: boolean;
  constructor(init: ModelInit<ClientNotificationPreferences>);
  static copyOf(source: ClientNotificationPreferences, mutator: (draft: MutableModel<ClientNotificationPreferences>) => MutableModel<ClientNotificationPreferences> | void): ClientNotificationPreferences;
}

export declare class ClientInfo {
  readonly id: string;
  readonly favorites?: string;
  constructor(init: ModelInit<ClientInfo>);
  static copyOf(source: ClientInfo, mutator: (draft: MutableModel<ClientInfo>) => MutableModel<ClientInfo> | void): ClientInfo;
}

export declare class ClientHistory {
  readonly id: string;
  readonly notes?: string;
  readonly isBlocked?: boolean;
  constructor(init: ModelInit<ClientHistory>);
  static copyOf(source: ClientHistory, mutator: (draft: MutableModel<ClientHistory>) => MutableModel<ClientHistory> | void): ClientHistory;
}

export declare class Chat {
  readonly id: string;
  readonly messages?: string;
  constructor(init: ModelInit<Chat>);
  static copyOf(source: Chat, mutator: (draft: MutableModel<Chat>) => MutableModel<Chat> | void): Chat;
}

export declare class Review {
  readonly id: string;
  readonly description?: string;
  readonly rating?: number;
  constructor(init: ModelInit<Review>);
  static copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

export declare class History {
  readonly id: string;
  readonly Appointment?: Appointment;
  readonly Review?: Review;
  readonly createdByClient?: boolean;
  constructor(init: ModelInit<History>);
  static copyOf(source: History, mutator: (draft: MutableModel<History>) => MutableModel<History> | void): History;
}

export declare class Appointment {
  readonly id: string;
  readonly statu?: AppointmentStatus | keyof typeof AppointmentStatus;
  readonly Service?: Service;
  readonly date?: string;
  readonly time?: string;
  readonly recurrentRule?: string;
  readonly duration?: number;
  constructor(init: ModelInit<Appointment>);
  static copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment>) => MutableModel<Appointment> | void): Appointment;
}

export declare class Service {
  readonly id: string;
  readonly name?: string;
  readonly duration?: number;
  readonly price?: number;
  constructor(init: ModelInit<Service>);
  static copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}

export declare class StylistNotficationPreferences {
  readonly id: string;
  readonly appointmentBooked?: boolean;
  readonly appointmentStatusChanged?: boolean;
  readonly reviewReceived?: boolean;
  readonly messageReceived?: boolean;
  readonly appointmentReminder?: boolean;
  constructor(init: ModelInit<StylistNotficationPreferences>);
  static copyOf(source: StylistNotficationPreferences, mutator: (draft: MutableModel<StylistNotficationPreferences>) => MutableModel<StylistNotficationPreferences> | void): StylistNotficationPreferences;
}

export declare class BookingPreferences {
  readonly id: string;
  readonly bookingInterval?: number;
  readonly lastMinuteBookingLimit?: number;
  constructor(init: ModelInit<BookingPreferences>);
  static copyOf(source: BookingPreferences, mutator: (draft: MutableModel<BookingPreferences>) => MutableModel<BookingPreferences> | void): BookingPreferences;
}

export declare class Blast {
  readonly id: string;
  readonly message?: string;
  readonly allClients?: boolean;
  readonly affectedDateTime?: string;
  constructor(init: ModelInit<Blast>);
  static copyOf(source: Blast, mutator: (draft: MutableModel<Blast>) => MutableModel<Blast> | void): Blast;
}

export declare class Override {
  readonly id: string;
  readonly customDuration?: number;
  readonly Service?: Service;
  constructor(init: ModelInit<Override>);
  static copyOf(source: Override, mutator: (draft: MutableModel<Override>) => MutableModel<Override> | void): Override;
}

export declare class TimeOff {
  readonly id: string;
  readonly period?: string;
  readonly message?: string;
  constructor(init: ModelInit<TimeOff>);
  static copyOf(source: TimeOff, mutator: (draft: MutableModel<TimeOff>) => MutableModel<TimeOff> | void): TimeOff;
}

export declare class WorkSchedule {
  readonly id: string;
  readonly sunday?: string;
  readonly monday?: string;
  readonly tuesday?: string;
  readonly wednesday?: string;
  readonly thursday?: string;
  readonly friday?: string;
  readonly saturday?: string;
  constructor(init: ModelInit<WorkSchedule>);
  static copyOf(source: WorkSchedule, mutator: (draft: MutableModel<WorkSchedule>) => MutableModel<WorkSchedule> | void): WorkSchedule;
}

export declare class Album {
  readonly id: string;
  readonly name?: string;
  readonly coverPhoto?: string;
  constructor(init: ModelInit<Album>);
  static copyOf(source: Album, mutator: (draft: MutableModel<Album>) => MutableModel<Album> | void): Album;
}

export declare class StylistInfo {
  readonly id: string;
  readonly profession?: StylistProfession | keyof typeof StylistProfession;
  readonly description?: string;
  readonly employerName?: string;
  readonly address?: string;
  constructor(init: ModelInit<StylistInfo>);
  static copyOf(source: StylistInfo, mutator: (draft: MutableModel<StylistInfo>) => MutableModel<StylistInfo> | void): StylistInfo;
}