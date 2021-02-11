/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment($clientId: String, $stylistId: String) {
    onCreateAppointment(clientId: $clientId, stylistId: $stylistId) {
      id
      status
      clientId
      stylistId
      dateTime
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
      clientId
      stylistId
      dateTime
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
      clientId
      stylistId
      dateTime
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
