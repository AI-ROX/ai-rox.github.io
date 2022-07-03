import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import EngineeringPage from './pages/EngineeringPage'
import ManufacturingPage from './pages/ManufacturingPage'
import MaterialsPage from './pages/MaterialsPage'
import SourcingPage from './pages/SourcingPage'
import EquipmentPage from './pages/EquipmentPage'
import BOMPage from './pages/BOMPage'
import SparepartsPage from './pages/SparepartsPage'
import NotFoundPage from './pages/NotFoundPage'

import { ROUTES } from './resources/routes-constants'

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/main.sass'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.INDEX_ROUTE} element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path={ROUTES.ENGINEERING} element={<EngineeringPage />} />
                  <Route path={ROUTES.MANUFACTURING} element={<ManufacturingPage />} />
                  <Route path={ROUTES.SOURCING} element={<SourcingPage />}>
                    <Route path={ROUTES.MATERIALS} element={<MaterialsPage />} />
                    <Route path={ROUTES.EQUIPMENT} element={<EquipmentPage />} />
                    <Route path={ROUTES.BOM} element={<BOMPage />} />
                    <Route path={ROUTES.SPAREPARTS} element={<SparepartsPage />} />
                  </Route>
                </Route>
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
