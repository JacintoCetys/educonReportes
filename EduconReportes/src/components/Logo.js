export const Logo = (props) => {
    const {color} = props
        
    if(color === 'negro'){
        return <img alt="Logo" src="../img/logonegro.png" {...props} height="100px" />    
    }
    
    return <img alt="Logo" src="../img/logoblanco.png" {...props} height="60px" />
    
}