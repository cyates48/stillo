/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($owner: String) {
    onCreateAlbum(owner: $owner) {
      id
      name
      coverPhoto
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($owner: String) {
    onUpdateAlbum(owner: $owner) {
      id
      name
      coverPhoto
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($owner: String) {
    onDeleteAlbum(owner: $owner) {
      id
      name
      coverPhoto
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment($clientId: String, $stylistId: String) {
    onCreateAppointment(clientId: $clientId, stylistId: $stylistId) {
      id
      status
      date
      time
      recurrentRule
      duration
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Service {
        id
        name
        duration
        price
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment($clientId: String, $stylistId: String) {
    onUpdateAppointment(clientId: $clientId, stylistId: $stylistId) {
      id
      status
      date
      time
      recurrentRule
      duration
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Service {
        id
        name
        duration
        price
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment($clientId: String, $stylistId: String) {
    onDeleteAppointment(clientId: $clientId, stylistId: $stylistId) {
      id
      status
      date
      time
      recurrentRule
      duration
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Service {
        id
        name
        duration
        price
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onCreateBlast = /* GraphQL */ `
  subscription OnCreateBlast($clientIds: String, $stylistId: String) {
    onCreateBlast(clientIds: $clientIds, stylistId: $stylistId) {
      id
      message
      allClients
      affectedDateTime
      clientIds
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlast = /* GraphQL */ `
  subscription OnUpdateBlast($clientIds: String, $stylistId: String) {
    onUpdateBlast(clientIds: $clientIds, stylistId: $stylistId) {
      id
      message
      allClients
      affectedDateTime
      clientIds
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlast = /* GraphQL */ `
  subscription OnDeleteBlast($clientIds: String, $stylistId: String) {
    onDeleteBlast(clientIds: $clientIds, stylistId: $stylistId) {
      id
      message
      allClients
      affectedDateTime
      clientIds
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBookingPreferences = /* GraphQL */ `
  subscription OnCreateBookingPreferences($owner: String) {
    onCreateBookingPreferences(owner: $owner) {
      id
      bookingInterval
      lastMinuteBookingLimit
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBookingPreferences = /* GraphQL */ `
  subscription OnUpdateBookingPreferences($owner: String) {
    onUpdateBookingPreferences(owner: $owner) {
      id
      bookingInterval
      lastMinuteBookingLimit
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBookingPreferences = /* GraphQL */ `
  subscription OnDeleteBookingPreferences($owner: String) {
    onDeleteBookingPreferences(owner: $owner) {
      id
      bookingInterval
      lastMinuteBookingLimit
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat($clientId: String, $stylistId: String) {
    onCreateChat(clientId: $clientId, stylistId: $stylistId) {
      id
      messages
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat($clientId: String, $stylistId: String) {
    onUpdateChat(clientId: $clientId, stylistId: $stylistId) {
      id
      messages
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat($clientId: String, $stylistId: String) {
    onDeleteChat(clientId: $clientId, stylistId: $stylistId) {
      id
      messages
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClientHistory = /* GraphQL */ `
  subscription OnCreateClientHistory($clientId: String, $stylistId: String) {
    onCreateClientHistory(clientId: $clientId, stylistId: $stylistId) {
      id
      notes
      isBlocked
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClientHistory = /* GraphQL */ `
  subscription OnUpdateClientHistory($clientId: String, $stylistId: String) {
    onUpdateClientHistory(clientId: $clientId, stylistId: $stylistId) {
      id
      notes
      isBlocked
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClientHistory = /* GraphQL */ `
  subscription OnDeleteClientHistory($clientId: String, $stylistId: String) {
    onDeleteClientHistory(clientId: $clientId, stylistId: $stylistId) {
      id
      notes
      isBlocked
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClientInfo = /* GraphQL */ `
  subscription OnCreateClientInfo($owner: String) {
    onCreateClientInfo(owner: $owner) {
      id
      favorites
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateClientInfo = /* GraphQL */ `
  subscription OnUpdateClientInfo($owner: String) {
    onUpdateClientInfo(owner: $owner) {
      id
      favorites
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteClientInfo = /* GraphQL */ `
  subscription OnDeleteClientInfo($owner: String) {
    onDeleteClientInfo(owner: $owner) {
      id
      favorites
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateClientNotificationPreferences = /* GraphQL */ `
  subscription OnCreateClientNotificationPreferences($owner: String) {
    onCreateClientNotificationPreferences(owner: $owner) {
      id
      appointmentStatusChanged
      messageReceived
      appointmentReminder
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateClientNotificationPreferences = /* GraphQL */ `
  subscription OnUpdateClientNotificationPreferences($owner: String) {
    onUpdateClientNotificationPreferences(owner: $owner) {
      id
      appointmentStatusChanged
      messageReceived
      appointmentReminder
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteClientNotificationPreferences = /* GraphQL */ `
  subscription OnDeleteClientNotificationPreferences($owner: String) {
    onDeleteClientNotificationPreferences(owner: $owner) {
      id
      appointmentStatusChanged
      messageReceived
      appointmentReminder
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory($clientId: String, $stylistId: String) {
    onCreateHistory(clientId: $clientId, stylistId: $stylistId) {
      id
      createdByClient
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Appointment {
        id
        status
        date
        time
        recurrentRule
        duration
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Service {
          id
          name
          duration
          price
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      Review {
        id
        description
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory($clientId: String, $stylistId: String) {
    onUpdateHistory(clientId: $clientId, stylistId: $stylistId) {
      id
      createdByClient
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Appointment {
        id
        status
        date
        time
        recurrentRule
        duration
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Service {
          id
          name
          duration
          price
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      Review {
        id
        description
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory($clientId: String, $stylistId: String) {
    onDeleteHistory(clientId: $clientId, stylistId: $stylistId) {
      id
      createdByClient
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Appointment {
        id
        status
        date
        time
        recurrentRule
        duration
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Service {
          id
          name
          duration
          price
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      Review {
        id
        description
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateOverride = /* GraphQL */ `
  subscription OnCreateOverride($clientId: String, $stylistId: String) {
    onCreateOverride(clientId: $clientId, stylistId: $stylistId) {
      id
      customDuration
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Service {
        id
        name
        duration
        price
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onUpdateOverride = /* GraphQL */ `
  subscription OnUpdateOverride($clientId: String, $stylistId: String) {
    onUpdateOverride(clientId: $clientId, stylistId: $stylistId) {
      id
      customDuration
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Service {
        id
        name
        duration
        price
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onDeleteOverride = /* GraphQL */ `
  subscription OnDeleteOverride($clientId: String, $stylistId: String) {
    onDeleteOverride(clientId: $clientId, stylistId: $stylistId) {
      id
      customDuration
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Service {
        id
        name
        duration
        price
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($clientId: String, $stylistId: String) {
    onCreateReview(clientId: $clientId, stylistId: $stylistId) {
      id
      description
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($clientId: String, $stylistId: String) {
    onUpdateReview(clientId: $clientId, stylistId: $stylistId) {
      id
      description
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($clientId: String, $stylistId: String) {
    onDeleteReview(clientId: $clientId, stylistId: $stylistId) {
      id
      description
      rating
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService($owner: String) {
    onCreateService(owner: $owner) {
      id
      name
      duration
      price
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService($owner: String) {
    onUpdateService(owner: $owner) {
      id
      name
      duration
      price
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService($owner: String) {
    onDeleteService(owner: $owner) {
      id
      name
      duration
      price
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateStylistInfo = /* GraphQL */ `
  subscription OnCreateStylistInfo($owner: String) {
    onCreateStylistInfo(owner: $owner) {
      id
      profession
      description
      employerName
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateStylistInfo = /* GraphQL */ `
  subscription OnUpdateStylistInfo($owner: String) {
    onUpdateStylistInfo(owner: $owner) {
      id
      profession
      description
      employerName
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteStylistInfo = /* GraphQL */ `
  subscription OnDeleteStylistInfo($owner: String) {
    onDeleteStylistInfo(owner: $owner) {
      id
      profession
      description
      employerName
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateStylistNotficationPreferences = /* GraphQL */ `
  subscription OnCreateStylistNotficationPreferences($owner: String) {
    onCreateStylistNotficationPreferences(owner: $owner) {
      id
      appointmentBooked
      appointmentStatusChanged
      reviewReceived
      messageReceived
      appointmentReminder
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateStylistNotficationPreferences = /* GraphQL */ `
  subscription OnUpdateStylistNotficationPreferences($owner: String) {
    onUpdateStylistNotficationPreferences(owner: $owner) {
      id
      appointmentBooked
      appointmentStatusChanged
      reviewReceived
      messageReceived
      appointmentReminder
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteStylistNotficationPreferences = /* GraphQL */ `
  subscription OnDeleteStylistNotficationPreferences($owner: String) {
    onDeleteStylistNotficationPreferences(owner: $owner) {
      id
      appointmentBooked
      appointmentStatusChanged
      reviewReceived
      messageReceived
      appointmentReminder
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTimeOff = /* GraphQL */ `
  subscription OnCreateTimeOff($owner: String) {
    onCreateTimeOff(owner: $owner) {
      id
      period
      message
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTimeOff = /* GraphQL */ `
  subscription OnUpdateTimeOff($owner: String) {
    onUpdateTimeOff(owner: $owner) {
      id
      period
      message
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTimeOff = /* GraphQL */ `
  subscription OnDeleteTimeOff($owner: String) {
    onDeleteTimeOff(owner: $owner) {
      id
      period
      message
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateWorkSchedule = /* GraphQL */ `
  subscription OnCreateWorkSchedule($owner: String) {
    onCreateWorkSchedule(owner: $owner) {
      id
      sunday
      monday
      tuesday
      wednesday
      thursday
      friday
      saturday
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateWorkSchedule = /* GraphQL */ `
  subscription OnUpdateWorkSchedule($owner: String) {
    onUpdateWorkSchedule(owner: $owner) {
      id
      sunday
      monday
      tuesday
      wednesday
      thursday
      friday
      saturday
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteWorkSchedule = /* GraphQL */ `
  subscription OnDeleteWorkSchedule($owner: String) {
    onDeleteWorkSchedule(owner: $owner) {
      id
      sunday
      monday
      tuesday
      wednesday
      thursday
      friday
      saturday
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
