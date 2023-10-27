import React from 'react'
import {Routes,Route} from "react-router-dom"
import {Dashboard} from "../Pages/Dashboard";
import {Repo} from "../Pages/Repo";
import {Follower} from "../Pages/Follower"
import {FollowerRepo} from "../Pages/FollowerRepo"

export function AllRoutes() {
    

    return (
        <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/repo/:id' element={<Repo />}></Route>
            <Route path='/followers/:id' element={<Follower />}></Route>
            <Route path='/followerepo/:id' element={<FollowerRepo />}></Route>
        </Routes>
    )
}
