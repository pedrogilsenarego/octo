import { useEffect } from "react";
import { useNavigate } from "react-router";
import  checkUserIsAdmin from "../utils/checkUserIsAdmin";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../slicer/types";
import { CurrentUser } from "../slicer/user/user.types";
import { ROUTE_PATHS } from "../constants/routes";
import { updateFailNotification } from "../slicer/general/general.actions";

const useAdminAuth = (props:any) => {
  const currentUser = useSelector<State, CurrentUser>(
    (state) => state?.user?.currentUser
  );
  const dispatch= useDispatch()
	
	const navigate = useNavigate();
	useEffect(
		() => {
			if (!checkUserIsAdmin(currentUser)) {
				navigate(ROUTE_PATHS.LOGIN);
        dispatch(updateFailNotification("Need to login with admin user"))
			}
		},
		// eslint-disable-next-line
		[currentUser]
	);
	return currentUser;
};

export default useAdminAuth;
