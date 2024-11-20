import PropTypes from 'prop-types'
import { useState } from 'react'
import dataAnnonces from '../../annonce.json'
import { useParams } from 'react-router-dom'

function Collapse(props) {
     const [isOpen, setIsOpen] = useState(false)
     const { id } = useParams()
     const title = props.title

     const annonce = dataAnnonces.find((annonce) => annonce.id === id)

     return 
          <div>
               <button onClick={() => setIsOpen(!isOpen)} type="button">
                    {title}
               </button>
               <ul className={isOpen ? open : close}>
                    <li></li>
               </ul>
          <div/>

export default Collapse

Collapse.propTypes = {
     id: PropTypes.string.isRequired,
}
