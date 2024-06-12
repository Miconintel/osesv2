import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/stateSlices/styleSlice";

export const useStyleSlice = function (payLoad = {}) {
  const state = useSelector((state) => state.styleReducer);
  const dispatch = useDispatch();
  //   const { onOpen, onClose } = actions;
  //   const openDispatch = dispatch(onOpen(payLoad));
  //   const closeDispatch = dispatch(onClose(payLoad));
  //   console.log(actions);

  return {
    state,
    dispatch,
    actions,
  };
};
