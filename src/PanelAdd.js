import React from 'react';

//function PanelAdd(props){
 class PanelAdd extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            title:'',
            image:'',
            rating:''
        };
    }   
    onChangeTitle=(e)=>{
        this.setState({title:e.target.value});
    }
    onChangeImage=(e)=>{
        this.setState({image:e.target.value});
    }
    onChangeRating=(e)=>{
        
        const rating=parseInt(e.target.value);
        this.setState({rating:rating});
    }
    onCancel(e){
        this.props.onhide();
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const title= this.state.title;
        const image= this.state.image;
        const rating= this.state.rating;

        this.props.onadd({title: title, image: image, rating: rating});
        
        this.onCancel();
    }

    render()    {
    return(
        <div className="new-item-panel-container">
            <div className="new-item-panel">
                <form onSubmit={this.onSubmit}>
                    <p>
                        <label>Titulo del libro: </label><br/>
                        <input onChange={this.onChangeTitle} type="text" name="title" className="input" />                                                    
                    </p>
                    <p>
                        <label>Nombre de imagen: </label><br/>
                        <input onChange={this.onChangeImage} type="text" name="image" className="input" />                                                    
                    </p>
                    <p>
                        <label>Calificacion</label><br/>
                        <select onChange={this.onChangeRating}> 
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <input type="submit" className="button btn-blue" value="Registrar Libro"/>
                    <button onClick={this.props.onhide}clasName="button btn-normal">Cancelar</button>
                </form>
            </div>


        </div>

    );
    }
}
export default PanelAdd;