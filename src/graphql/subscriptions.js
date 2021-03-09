/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat($clientId: String, $stylistId: String) {
    onCreateChat(clientId: $clientId, stylistId: $stylistId) {
      id
      stylistId
      clientId
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
      stylistId
      clientId
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
      stylistId
      clientId
      messages
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment($clientId: String, $stylistId: String) {
    onCreateAppointment(clientId: $clientId, stylistId: $stylistId) {
      id
      status
      clientId
      stylistId
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
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($owner: String) {
    onCreateAlbum(owner: $owner) {
      id
      albumCoverPhoto
      name
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
      albumCoverPhoto
      name
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
      albumCoverPhoto
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
