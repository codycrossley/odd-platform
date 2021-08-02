import { Action } from 'redux/interfaces';
import { getType } from 'typesafe-actions';
import * as actions from 'redux/actions';
import { AlertsState } from '../interfaces/state';

export const initialState: AlertsState = {
  byId: {},
  allIds: [],
  totals: {},
  alertIdsByDataEntityId: {},
  pageInfo: {
    total: 0,
    page: 0,
    hasNext: true,
  },
};

const reducer = (state = initialState, action: Action): AlertsState => {
  switch (action.type) {
    case getType(actions.fetchAlertsTotalsAction.success):
      return {
        ...state,
        totals: action.payload,
      };
    case getType(actions.fetchAlertListAction.success):
      return {
        ...state,
        byId:
          action.payload.items?.reduce(
            (memo, alert) => ({
              ...memo,
              [alert.id]: alert,
            }),
            {}
          ) || {},
        allIds: action.payload.items?.map(alert => alert.id) || [],
      };
    case getType(actions.fetchDataEntityAlertsAction.success):
      return {
        ...state,
        byId:
          action.payload.value.items?.reduce(
            (memo, alert) => ({
              ...memo,
              [alert.id]: alert,
            }),
            state.byId
          ) || state.byId,
        alertIdsByDataEntityId: {
          ...state.alertIdsByDataEntityId,
          [action.payload.entityId]: action.payload.value.items?.map(
            alert => alert.id
          ),
        },
      };
    case getType(actions.updateAlertStatusAction.success):
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.entityId]: {
            ...state.allIds,
            status: action.payload.value,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
