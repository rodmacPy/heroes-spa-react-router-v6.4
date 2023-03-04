import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { LayoutPage } from '../layout/LayoutPage'
import { LoginPage } from '../auth/'
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../heroes/'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRouter><LayoutPage /></PrivateRouter>,
        children: [
            {
                path: 'marvel',
                element:
                    <MarvelPage />
            },
            {
                path: 'dc',
                element: <DCPage />,

            },
            {
                path: 'search',
                element: <SearchPage />,

            },
            {
                path: 'hero/:id',
                element: <HeroPage />,
            },
        ]
    },
    {
        path: 'login',
        element:
            <PublicRouter>
                <LoginPage />
            </PublicRouter>,
    },
])
