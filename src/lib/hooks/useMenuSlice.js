import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/stateSlices/menuSlice";

export const useMenuSlice = function (payLoad = {}) {
  const state = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();

  return {
    state,
    dispatch,
    actions,
  };
};
