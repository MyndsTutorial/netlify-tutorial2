import React, { useEffect, useState } from 'react';
import "./App.css"
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
function AnimeComponent() {
  return (
    <RouterProvider router={router} />
   
  );
}

export default AnimeComponent;
