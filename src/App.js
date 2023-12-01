import React, {useEffect, useState} from "react";
import "./App.css";
import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getAnimesFromStorage} from "./redux/slices/actions/getAnimesFromStorage";
function AnimeComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimesFromStorage());
  }, []);
  return <RouterProvider router={router} />;
}

export default AnimeComponent;
