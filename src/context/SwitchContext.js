import { createContext, useState} from "react";

localStorage.setItem('false', false)
localStorage.setItem('true', true)

const SwitchContext = createContext()
const initialState = JSON.parse(localStorage.getItem('bg'))

 export const SwitchProvider = ({children}) => {
    const theme = {
        about: '#2B2934',
        contact : '#4C597F',
        project : '#2B2934',
        service : '#2B2934',
        card : 'dark'
    }
    const [active, setActive] = useState(initialState)
      
 

    const handleOnClick = (e) => {
        if(e.target.id === 'light') {
            setActive(false)
        }
        
        if(e.target.id === 'dark') {
            setActive(true)
        }
       
    }
    
   
        localStorage.setItem('bg', JSON.stringify(active))  
   
    
    const data = {active, handleOnClick, theme}
    return <SwitchContext.Provider value={data}>{children}</SwitchContext.Provider>
}
export default SwitchContext

