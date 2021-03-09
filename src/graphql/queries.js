/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
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
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAlbums = /* GraphQL */ `
  query SyncAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAlbums(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
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
export const syncAppointments = /* GraphQL */ `
  query SyncAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppointments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBlast = /* GraphQL */ `
  query GetBlast($id: ID!) {
    getBlast(id: $id) {
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
export const listBlasts = /* GraphQL */ `
  query ListBlasts(
    $filter: ModelBlastFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlasts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBlasts = /* GraphQL */ `
  query SyncBlasts(
    $filter: ModelBlastFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlasts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBookingPreferences = /* GraphQL */ `
  query GetBookingPreferences($id: ID!) {
    getBookingPreferences(id: $id) {
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
export const listBookingPreferencess = /* GraphQL */ `
  query ListBookingPreferencess(
    $filter: ModelBookingPreferencesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookingPreferencess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBookingPreferences = /* GraphQL */ `
  query SyncBookingPreferences(
    $filter: ModelBookingPreferencesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookingPreferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
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
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        messages
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChats = /* GraphQL */ `
  query SyncChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        messages
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getClientHistory = /* GraphQL */ `
  query GetClientHistory($id: ID!) {
    getClientHistory(id: $id) {
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
export const listClientHistorys = /* GraphQL */ `
  query ListClientHistorys(
    $filter: ModelClientHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        notes
        isBlocked
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClientHistories = /* GraphQL */ `
  query SyncClientHistories(
    $filter: ModelClientHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClientHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        notes
        isBlocked
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getClientInfo = /* GraphQL */ `
  query GetClientInfo($id: ID!) {
    getClientInfo(id: $id) {
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
export const listClientInfos = /* GraphQL */ `
  query ListClientInfos(
    $filter: ModelClientInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        favorites
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClientInfos = /* GraphQL */ `
  query SyncClientInfos(
    $filter: ModelClientInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClientInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        favorites
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getClientNotificationPreferences = /* GraphQL */ `
  query GetClientNotificationPreferences($id: ID!) {
    getClientNotificationPreferences(id: $id) {
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
export const listClientNotificationPreferencess = /* GraphQL */ `
  query ListClientNotificationPreferencess(
    $filter: ModelClientNotificationPreferencesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientNotificationPreferencess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncClientNotificationPreferences = /* GraphQL */ `
  query SyncClientNotificationPreferences(
    $filter: ModelClientNotificationPreferencesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClientNotificationPreferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
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
export const listHistorys = /* GraphQL */ `
  query ListHistorys(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncHistories = /* GraphQL */ `
  query SyncHistories(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOverride = /* GraphQL */ `
  query GetOverride($id: ID!) {
    getOverride(id: $id) {
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
export const listOverrides = /* GraphQL */ `
  query ListOverrides(
    $filter: ModelOverrideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOverrides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOverrides = /* GraphQL */ `
  query SyncOverrides(
    $filter: ModelOverrideFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOverrides(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
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
export const syncReviews = /* GraphQL */ `
  query SyncReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        description
        rating
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
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
export const syncServices = /* GraphQL */ `
  query SyncServices(
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getStylistInfo = /* GraphQL */ `
  query GetStylistInfo($id: ID!) {
    getStylistInfo(id: $id) {
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
export const listStylistInfos = /* GraphQL */ `
  query ListStylistInfos(
    $filter: ModelStylistInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStylistInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncStylistInfos = /* GraphQL */ `
  query SyncStylistInfos(
    $filter: ModelStylistInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStylistInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getStylistNotficationPreferences = /* GraphQL */ `
  query GetStylistNotficationPreferences($id: ID!) {
    getStylistNotficationPreferences(id: $id) {
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
export const listStylistNotficationPreferencess = /* GraphQL */ `
  query ListStylistNotficationPreferencess(
    $filter: ModelStylistNotficationPreferencesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStylistNotficationPreferencess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncStylistNotficationPreferences = /* GraphQL */ `
  query SyncStylistNotficationPreferences(
    $filter: ModelStylistNotficationPreferencesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStylistNotficationPreferences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTimeOff = /* GraphQL */ `
  query GetTimeOff($id: ID!) {
    getTimeOff(id: $id) {
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
export const listTimeOffs = /* GraphQL */ `
  query ListTimeOffs(
    $filter: ModelTimeOffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimeOffs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTimeOffs = /* GraphQL */ `
  query SyncTimeOffs(
    $filter: ModelTimeOffFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTimeOffs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWorkSchedule = /* GraphQL */ `
  query GetWorkSchedule($id: ID!) {
    getWorkSchedule(id: $id) {
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
export const listWorkSchedules = /* GraphQL */ `
  query ListWorkSchedules(
    $filter: ModelWorkScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWorkSchedules = /* GraphQL */ `
  query SyncWorkSchedules(
    $filter: ModelWorkScheduleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
