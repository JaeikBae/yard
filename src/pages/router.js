import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './common/MainPage';
import FavoritesPage from './main/FavoritesPage';
import TrashBinPage from './main/TrashBinPage';
import RegisterPage from './login/RegisterPage';
import LoginPage from './login/LoginPage';
import LoginQuestionPage from './login/LoginQuestionPage';
import UploadPage from './load/UploadPage';
import DownloadPage from './load/DownloadPage';
import NoticePage from './cs/NoticePage';
import TermsPage from './cs/TermsPage';
import FaqPage from './cs/FaqPage';
import QuestionPage from './cs/QuestionPage';
import AdminConfigPage from './admin/AdminConfigPage';
import AdminUserCtrlPage from './admin/AdminUserCtrlPage';
import ErrorPage from './common/ErrorPage';
import CheckPwRoutes from './mypage/CheckPwRoutes';

export default () => (
    <Router>
        <Routes>
            <Route exact path='/' element={<MainPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/trash' element={<TrashBinPage />} />


            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/login/ask' element={<LoginQuestionPage/>} />
            
            <Route path='/mypage' element={<CheckPwRoutes />} />

            <Route path='/upload' element={<UploadPage/>} />
            <Route path='/download' element={<DownloadPage />} />

            <Route path='/cs/notice' element={<NoticePage/>} />
            <Route path='/cs/terms' element={<TermsPage/>} />
            <Route path='/cs/faq' element={<FaqPage/>} />
            <Route path='/cs/question' element={<QuestionPage/>} />

            <Route path='/admin' element={<AdminConfigPage />} />
            <Route path='/admin/rules' element={<AdminConfigPage/>} />
            <Route path='/admin/user-ctrl' element={<AdminUserCtrlPage/>} />

            <Route path='/error' element={<ErrorPage/>} />
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
    </Router>
)