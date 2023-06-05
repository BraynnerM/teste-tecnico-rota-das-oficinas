import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Task_1 } from './task_1';
import { Task_2 } from './task_2';
import { Task_3 } from './task_3';

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/task_1/" element={<Task_1 />} />
            <Route exact path="/task_2/" element={<Task_2 />} />
            <Route exact path="/task_3/" element={<Task_3 />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;