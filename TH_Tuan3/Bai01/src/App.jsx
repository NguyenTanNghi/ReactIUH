import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Contact'

function App() {
  const [contact, setContact] = useState([
    {
      id: '1',
      firstName: 'Chidi',
      lastName: 'Anagonye',
      phone: '555-366-8987',
      address: "St. John's  University, Sydney, Australia"
    },
    {
      id: '2',
      firstName: 'Eleanor',
      lastName: 'Shellstrop',
      phone: '555-483-1457',
      address: "335 Avalon St, Apt 2C, Pheonix Arizona"
    },
    {
      id: '3',
      firstName: 'Tahani',
      lastName: 'Al-Jamil',
      phone: '555-276-7991',
      address: "1 Lancaster Terrace, London, England"
    },
    {
      id: '4',
      firstName: 'Jason',
      lastName: 'Medoza',
      phone: '555-113-8388',
      address: "779 William St, Miami, Florida"
    }
  ]);
  const handleDeleteContact = (id) => {
    setContact(contact.filter(x => x.id !== id))
  };
  function xoaTatCa() {
    setContact([])
  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Contact contacts={contact} onDelete={handleDeleteContact} />
      </div>
      <button className='deleteAll' onClick={xoaTatCa}>DeleteAll</button>

    </>
  )
}

export default App
