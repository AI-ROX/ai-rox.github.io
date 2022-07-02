import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import EngineeringPage from './pages/EngineeringPage'
import ManufacturingPage from './pages/ManufacturingPage'
import MaterialsPage from './pages/MaterialsPage'
import SupplyPage from './pages/SupplyPage'
import EquipmentPage from './pages/EquipmentPage'
import SupplyBOMPage from './pages/SupplyBOMPage'
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
                  <Route path={ROUTES.SUPPLY} element={<SupplyPage />}>
                    <Route path={ROUTES.MATERIALS} element={<MaterialsPage />} />
                    <Route path={ROUTES.EQUIPMENT} element={<EquipmentPage />} />
                    <Route path={ROUTES.SUPPLYBOM} element={<SupplyBOMPage />} />
                    <Route path={ROUTES.SPAREPARTS} element={<SparepartsPage />} />
                  </Route>
                </Route>
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
