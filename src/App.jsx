import { useState, lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./assets/styles/global.css";
import Loading from "./components/Loading";
const Weather = lazy(() => import("./pages/index"));

function App() {

    return (
        <main>
          <Routes>
            <Route
               path='/'
               element={
                <Suspense>
                   <Weather/>
                </Suspense>
               }
            />
          </Routes>
        </main>
    )
}

export default App