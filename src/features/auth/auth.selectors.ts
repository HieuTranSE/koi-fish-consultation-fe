import { RootState } from '../../redux/rootReducer'; // Import your RootState type

export const selectUserInfo = (state: RootState) => state.auth.user;

export const selectIsLoggedIn = (state: RootState) => state.auth.auth.isLoggedIn;

export const selectAuthInfo = (state: RootState) => state.auth.auth;

export const selectUserPackageInfo = (state: RootState) => state.auth.userPackageInfo;
export const selectPersonalFengshui = (state: RootState) => state.auth.personalFengshui;