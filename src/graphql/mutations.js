/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
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
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
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
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
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
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
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
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
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
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
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
export const createBlast = /* GraphQL */ `
  mutation CreateBlast(
    $input: CreateBlastInput!
    $condition: ModelBlastConditionInput
  ) {
    createBlast(input: $input, condition: $condition) {
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
export const updateBlast = /* GraphQL */ `
  mutation UpdateBlast(
    $input: UpdateBlastInput!
    $condition: ModelBlastConditionInput
  ) {
    updateBlast(input: $input, condition: $condition) {
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
export const deleteBlast = /* GraphQL */ `
  mutation DeleteBlast(
    $input: DeleteBlastInput!
    $condition: ModelBlastConditionInput
  ) {
    deleteBlast(input: $input, condition: $condition) {
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
export const createBookingPreferences = /* GraphQL */ `
  mutation CreateBookingPreferences(
    $input: CreateBookingPreferencesInput!
    $condition: ModelBookingPreferencesConditionInput
  ) {
    createBookingPreferences(input: $input, condition: $condition) {
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
export const updateBookingPreferences = /* GraphQL */ `
  mutation UpdateBookingPreferences(
    $input: UpdateBookingPreferencesInput!
    $condition: ModelBookingPreferencesConditionInput
  ) {
    updateBookingPreferences(input: $input, condition: $condition) {
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
export const deleteBookingPreferences = /* GraphQL */ `
  mutation DeleteBookingPreferences(
    $input: DeleteBookingPreferencesInput!
    $condition: ModelBookingPreferencesConditionInput
  ) {
    deleteBookingPreferences(input: $input, condition: $condition) {
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
export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
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
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
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
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
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
export const createClientHistory = /* GraphQL */ `
  mutation CreateClientHistory(
    $input: CreateClientHistoryInput!
    $condition: ModelClientHistoryConditionInput
  ) {
    createClientHistory(input: $input, condition: $condition) {
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
export const updateClientHistory = /* GraphQL */ `
  mutation UpdateClientHistory(
    $input: UpdateClientHistoryInput!
    $condition: ModelClientHistoryConditionInput
  ) {
    updateClientHistory(input: $input, condition: $condition) {
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
export const deleteClientHistory = /* GraphQL */ `
  mutation DeleteClientHistory(
    $input: DeleteClientHistoryInput!
    $condition: ModelClientHistoryConditionInput
  ) {
    deleteClientHistory(input: $input, condition: $condition) {
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
export const createClientInfo = /* GraphQL */ `
  mutation CreateClientInfo(
    $input: CreateClientInfoInput!
    $condition: ModelClientInfoConditionInput
  ) {
    createClientInfo(input: $input, condition: $condition) {
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
export const updateClientInfo = /* GraphQL */ `
  mutation UpdateClientInfo(
    $input: UpdateClientInfoInput!
    $condition: ModelClientInfoConditionInput
  ) {
    updateClientInfo(input: $input, condition: $condition) {
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
export const deleteClientInfo = /* GraphQL */ `
  mutation DeleteClientInfo(
    $input: DeleteClientInfoInput!
    $condition: ModelClientInfoConditionInput
  ) {
    deleteClientInfo(input: $input, condition: $condition) {
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
export const createClientNotificationPreferences = /* GraphQL */ `
  mutation CreateClientNotificationPreferences(
    $input: CreateClientNotificationPreferencesInput!
    $condition: ModelClientNotificationPreferencesConditionInput
  ) {
    createClientNotificationPreferences(input: $input, condition: $condition) {
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
export const updateClientNotificationPreferences = /* GraphQL */ `
  mutation UpdateClientNotificationPreferences(
    $input: UpdateClientNotificationPreferencesInput!
    $condition: ModelClientNotificationPreferencesConditionInput
  ) {
    updateClientNotificationPreferences(input: $input, condition: $condition) {
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
export const deleteClientNotificationPreferences = /* GraphQL */ `
  mutation DeleteClientNotificationPreferences(
    $input: DeleteClientNotificationPreferencesInput!
    $condition: ModelClientNotificationPreferencesConditionInput
  ) {
    deleteClientNotificationPreferences(input: $input, condition: $condition) {
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
export const createHistory = /* GraphQL */ `
  mutation CreateHistory(
    $input: CreateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    createHistory(input: $input, condition: $condition) {
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
export const updateHistory = /* GraphQL */ `
  mutation UpdateHistory(
    $input: UpdateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    updateHistory(input: $input, condition: $condition) {
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
export const deleteHistory = /* GraphQL */ `
  mutation DeleteHistory(
    $input: DeleteHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    deleteHistory(input: $input, condition: $condition) {
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
export const createOverride = /* GraphQL */ `
  mutation CreateOverride(
    $input: CreateOverrideInput!
    $condition: ModelOverrideConditionInput
  ) {
    createOverride(input: $input, condition: $condition) {
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
export const updateOverride = /* GraphQL */ `
  mutation UpdateOverride(
    $input: UpdateOverrideInput!
    $condition: ModelOverrideConditionInput
  ) {
    updateOverride(input: $input, condition: $condition) {
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
export const deleteOverride = /* GraphQL */ `
  mutation DeleteOverride(
    $input: DeleteOverrideInput!
    $condition: ModelOverrideConditionInput
  ) {
    deleteOverride(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
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
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
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
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
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
export const createStylistInfo = /* GraphQL */ `
  mutation CreateStylistInfo(
    $input: CreateStylistInfoInput!
    $condition: ModelStylistInfoConditionInput
  ) {
    createStylistInfo(input: $input, condition: $condition) {
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
export const updateStylistInfo = /* GraphQL */ `
  mutation UpdateStylistInfo(
    $input: UpdateStylistInfoInput!
    $condition: ModelStylistInfoConditionInput
  ) {
    updateStylistInfo(input: $input, condition: $condition) {
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
export const deleteStylistInfo = /* GraphQL */ `
  mutation DeleteStylistInfo(
    $input: DeleteStylistInfoInput!
    $condition: ModelStylistInfoConditionInput
  ) {
    deleteStylistInfo(input: $input, condition: $condition) {
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
export const createStylistNotficationPreferences = /* GraphQL */ `
  mutation CreateStylistNotficationPreferences(
    $input: CreateStylistNotficationPreferencesInput!
    $condition: ModelStylistNotficationPreferencesConditionInput
  ) {
    createStylistNotficationPreferences(input: $input, condition: $condition) {
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
export const updateStylistNotficationPreferences = /* GraphQL */ `
  mutation UpdateStylistNotficationPreferences(
    $input: UpdateStylistNotficationPreferencesInput!
    $condition: ModelStylistNotficationPreferencesConditionInput
  ) {
    updateStylistNotficationPreferences(input: $input, condition: $condition) {
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
export const deleteStylistNotficationPreferences = /* GraphQL */ `
  mutation DeleteStylistNotficationPreferences(
    $input: DeleteStylistNotficationPreferencesInput!
    $condition: ModelStylistNotficationPreferencesConditionInput
  ) {
    deleteStylistNotficationPreferences(input: $input, condition: $condition) {
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
export const createTimeOff = /* GraphQL */ `
  mutation CreateTimeOff(
    $input: CreateTimeOffInput!
    $condition: ModelTimeOffConditionInput
  ) {
    createTimeOff(input: $input, condition: $condition) {
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
export const updateTimeOff = /* GraphQL */ `
  mutation UpdateTimeOff(
    $input: UpdateTimeOffInput!
    $condition: ModelTimeOffConditionInput
  ) {
    updateTimeOff(input: $input, condition: $condition) {
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
export const deleteTimeOff = /* GraphQL */ `
  mutation DeleteTimeOff(
    $input: DeleteTimeOffInput!
    $condition: ModelTimeOffConditionInput
  ) {
    deleteTimeOff(input: $input, condition: $condition) {
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
export const createWorkSchedule = /* GraphQL */ `
  mutation CreateWorkSchedule(
    $input: CreateWorkScheduleInput!
    $condition: ModelWorkScheduleConditionInput
  ) {
    createWorkSchedule(input: $input, condition: $condition) {
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
export const updateWorkSchedule = /* GraphQL */ `
  mutation UpdateWorkSchedule(
    $input: UpdateWorkScheduleInput!
    $condition: ModelWorkScheduleConditionInput
  ) {
    updateWorkSchedule(input: $input, condition: $condition) {
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
export const deleteWorkSchedule = /* GraphQL */ `
  mutation DeleteWorkSchedule(
    $input: DeleteWorkScheduleInput!
    $condition: ModelWorkScheduleConditionInput
  ) {
    deleteWorkSchedule(input: $input, condition: $condition) {
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
