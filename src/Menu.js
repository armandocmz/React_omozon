import React from 'react';
import Search from './Search';
import PanelAdd from './PanelAdd';
import './Menu.css'; //archivos css solo imporan

//<!--//donde declaras el componente se importa ejemplo <Search/> import Search-->
//COMPONENTE LOS MENU.JS
//function Menu(props){
 class Menu extends React.Component{   
    constructor(props) {
        super(props);
        this.state={newItemPanel: false};
        this.add=this.add.bind(this);
        this.onCancel=this.onCancel.bind(this);
    }
    add(){
    //add=()=>{ sin bind
        this.setState({newItemPanel:true});
    }
    onCancel(){
        this.setState({newItemPanel:false});
    }
    render(){
        return(
        /*<h1>Hola {props.nombre}</h1>*/
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        {this.props.title}
                    </div>
                    <div className="search">
                        <Search onsearch={this.props.onsearch} /> 
                    </div>
                    <div className="actions">
                        <button onClick={this.add} className="button btn-blue">+ Añadir New Book</button>
                    </div>
                </div>
                {
                    (this.state.newItemPanel)?//aqui se pasa la varibale de la funcion
                        <PanelAdd onhide={this.onCancel} onadd={this.props.onadd} />
                    :
                    ''
                }
                
            </div>
        );
    }
}

export default Menu;