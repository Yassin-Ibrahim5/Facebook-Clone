import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TokenContextProvider from "./Contexts/TokenContext.jsx";
import PostContextProvider from "./Contexts/PostContext.jsx";

createRoot(document.getElementById('root')).render(
    <TokenContextProvider>
        <PostContextProvider>
            <StrictMode>
                <App/>
            </StrictMode>
        </PostContextProvider>
    </TokenContextProvider>
)
