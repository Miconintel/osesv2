import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/stateSlices/menuSlice";

//
export const useCartSlice = function (payLoad = {}) {
  const state = useSelector((state) => state.styleReducer);
  const dispatch = useDispatch();

  return {
    state,
    dispatch,
    actions,
  };
};
