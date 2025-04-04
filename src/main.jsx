import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'



createRoot(document.getElementById('root')).render(
    <ChakraProvider value={defaultSystem}>
    <App />
    </ChakraProvider>

)
