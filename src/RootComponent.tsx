import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import EngineeringPage from './pages/EngineeringPage'
import ManufacturingPage from './pages/ManufacturingPage'
import MaterialsPage from './pages/MaterialsPage'
import EquipmentPage from './pages/EquipmentPage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/main.sass'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.INDEX_ROUTE} element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path={ROUTES.ENGINEERING} element={<EngineeringPage />} />
                  <Route path={ROUTES.MANUFACTURING} element={<ManufacturingPage />} />
                  <Route path={ROUTES.MATERIALS} element={<MaterialsPage />} />
                  <Route path={ROUTES.EQUIPMENT} element={<EquipmentPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default RootComponent
