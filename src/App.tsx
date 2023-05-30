import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import {TodoList} from "./pages/TodoList";
import {Header} from "./components/Header";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {handleCheckAuth} from "./store/actions/userActions";
import {APP_ROUTES, TOKEN_KEY} from "./shared/constant";
import {AuthorizationPage} from "./pages/AuthorizationPage";

export const App = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.user)

    useEffect(() => {
        if (localStorage.getItem(TOKEN_KEY)) {
            dispatch(handleCheckAuth())
        }
    }, [dispatch])

    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path={APP_ROUTES.default} element={user ? <TodoList/> : <AuthorizationPage/>}/>
                    <Route path={APP_ROUTES.todoList} element={user ? <TodoList/> : <AuthorizationPage/>}/>
                    <Route path={APP_ROUTES.login} element={<AuthorizationPage/>}/>
                    <Route path={APP_ROUTES.registration} element={<AuthorizationPage registration={true}/>}/>
                </Routes>
            </div>
        </Router>
    );
}
