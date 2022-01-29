import React, { useEffect } from 'react'

// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// Global Alert
import Alert from "../components/alerts/Alert";

// Connect and Error State Global
import { connect } from 'react-redux';

// Navigation
import HomeScreen from "../pages/HomeScreen";
import AuthScreen from "../pages/AuthScreen";

const Navigation = ({ error, message}) => {

    return (
        <div>
        { message || error ? (<Alert />) : ""}
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<AuthScreen />} />
                <Route exact path="*" element={<PrivateRoute> <HomeScreen /> </PrivateRoute>} />
                    {/*<Route index element={<HomeScreen />} />*/}
                    {/*<Route path="teams" element={<Teams />}>*/}
                    {/*    <Route path=":teamId" element={<Team />} />*/}
                    {/*    <Route path="new" element={<NewTeamForm />} />*/}
                    {/*    <Route index element={<LeagueStandings />} />*/}
                    {/*</Route>*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
        </div>
    )
}

const mapStateToProps = state => ({
    error: state.error.error,
    message: state.error.message,
})

export default connect(mapStateToProps, {  }) (Navigation)