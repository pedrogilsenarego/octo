import generalTypes from "./general.types";

export const enableLoading = () => ({
  type: generalTypes.ENABLE_LOADING,
});

export const disableLoading = () => ({
  type: generalTypes.DISABLE_LOADING,
});

//notifications
export const updateSuccessNotification = (message: string) => ({
  type: generalTypes.UPDATE_SUCCESS_NOTIFICATION,
  payload: message,
});

export const updateFailNotification = (message: string) => ({
  type: generalTypes.UPDATE_FAIL_NOTIFICATION,
  payload: message,
});

export const updateInformationNotification = (message: string) => ({
  type: generalTypes.UPDATE_INFORMATION_NOTIFICATION,
  payload: message,
});

export const clearNotification = () => ({
  type: generalTypes.CLEAR_NOTIFICATION,
});

// API requests
export const updateSuccessApiRequest = (message: string) => ({
  type: generalTypes.UPDATE_SUCCESS_API_REQUEST,
  payload: message,
});

export const updateFailApiRequest = (message: string) => ({
  type: generalTypes.UPDATE_FAIL_API_REQUEST,
  payload: message,
});

export const clearApiRequest = () => ({
  type: generalTypes.CLEAR_API_REQUEST,
});

export const saveLastEndpoint = (endpoint:string) => ({
  type: generalTypes.SAVE_LAST_ENDPOINT,
  payload: endpoint
})

export const removeLastEndpoint = () => ({
  type: generalTypes.REMOVE_LAST_ENDPOINT,
  
})

export const updateLang = (lang:string) => ({
  type: generalTypes.UPDATE_LANG,
  payload: lang
})

export const scrollTo = (signal:number|null) => ({
  type: generalTypes.SCROLL,
  payload: signal
})

export const setCookiePolicy = (signal:boolean) => ({
  type: generalTypes.SET_COOKIE_POLICY,
  payload: signal
})

export type CollectionPositions = "NEON_YELLOW" |"BLACKISH" |"SOFT_PINK" | "ANTHRACITE" | "TAUPE" | "PRETTY_CREAM"


export const setScrollCollections = (position:CollectionPositions) => ({
  type: generalTypes.SCROLL_COLLECTIONS,
  payload: position
})

export const setPositionVertical = (position:boolean) => ({
  type: generalTypes.POSITION_VERTICAL,
  payload: position
})

export const setStopScroll = (signal:boolean) => ({
  type: generalTypes.STOP_SCROLL,
  payload: signal
})

