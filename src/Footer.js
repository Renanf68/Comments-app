import React from 'react'

const footerStyle = {
    width: '100%', 
    border: '1px solid grey', 
    position: 'fixed', 
    bottom: '0',
    backgroundColor: 'white'
}
const Footer = props => (
    <footer className="container-fluid" style={footerStyle}>
        <div className="container" style={{textAlign: 'center', padding: '15px'}}>
            <p style={{margin: 0}}>Copyright &copy; girAwa 2017</p>
        </div>
    </footer>
)

export default Footer