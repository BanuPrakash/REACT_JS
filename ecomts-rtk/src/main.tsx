import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import {Provider} from 'react-redux'
import store from './redux/store.js'
// const queryClient = new QueryClient();

const queryClient = new QueryClient({
    defaultOptions: {queries: {staleTime: 1000 * 60 * 5}}
});

createRoot(document.getElementById('root') as HTMLDivElement).render(
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Provider store={store}>
                 <App />
            </Provider>
        </BrowserRouter>
        <ReactQueryDevtools />
        </QueryClientProvider>
)
