import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { movieActions } from "../redux/slices/movieSlice";

const actions = {
  ...movieActions,
};
export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
