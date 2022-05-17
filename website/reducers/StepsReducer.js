import * as str from "../actions/index.js";
import _ from "lodash";

const initialState = {
  people: null,
  chats: null,
};

function deletePair(obj, key) {
  const temp = obj;
  temp[key] = undefined;
  const list = Object.values(temp).filter((x) => {
    return Boolean(x);
  });
  return _.mapKeys(list, "id");
}

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    // People
    case str.GET_PEOPLE:
      return {
        ...state,
        people: _.mapKeys(action.payload, "id"),
      };
    case str.UPDATE_PERSON:
      return {
        ...state,
        people: {
          ...state.people,
          [action.payload.id]: action.payload,
        },
      };
    case str.DELETE_PERSON:
      const people = deletePair(state.people, action.payload.id);
      return { ...state, people };
    // Chats
    case str.GET_CHATS:
      return {
        ...state,
        chats: _.mapKeys(action.payload, "id"),
      };
    case str.UPDATE_CHAT:
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.id]: action.payload,
        },
      };
    case str.DELETE_CHAT:
      const chats = deletePair(state.chats, action.payload.id);
      return { ...state, chats };
    // Collaborators
    case str.GET_COLLABORATORS:
      return {
        ...state,
        collaborators: _.mapKeys(action.payload, "id"),
      };
    case str.UPDATE_COLLABORATOR:
      return {
        ...state,
        collaborators: {
          ...state.collaborators,
          [action.payload.id]: action.payload,
        },
      };
    case str.DELETE_COLLABORATOR:
      const collaborators = deletePair(state.collaborators, action.payload.id);
      return { ...state, collaborators };
    // Invites
    case str.GET_INVITES:
      return {
        ...state,
        invites: _.mapKeys(action.payload, "id"),
      };
    case str.UPDATE_INVITE:
      return {
        ...state,
        invites: {
          ...state.invites,
          [action.payload.id]: action.payload,
        },
      };
    case str.DELETE_INVITE:
      const invites = deletePair(state.invites, action.payload.id);
      return { ...state, invites };
    // Webhooks
    case str.GET_WEBHOOKS:
      return {
        ...state,
        webhooks: _.mapKeys(action.payload, "id"),
      };
    case str.UPDATE_WEBHOOK:
      return {
        ...state,
        webhooks: {
          ...state.webhooks,
          [action.payload.id]: action.payload,
        },
      };
    case str.DELETE_WEBHOOK:
      const webhooks = deletePair(state.webhooks, action.payload.id);
      return { ...state, webhooks };
    case str.UPDATE_PROJECT:
      return { ...state, ...action.payload };
    case str.RESET_PROJECT:
      return initialState;
    case str.SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}
