import React from 'react'

const Container = (props) => {
    const {fullWidth, children,dFlex} = props;
  return (
    <div className={`${fullWidth ? 'container-fluid' : ''} ${dFlex ? 'd-flex justify-content-between' : ''}`}>
        {children}
        {/* children es quivalente a todos los componentes que iran adentro en el futuro*/}
    </div>
  )
}


export default Container