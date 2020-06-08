import React from 'react';
//import logo from './logo.svg';
import Menu from './Menu';
import List from './List';
import './App.css';
//Transformar la APP() a clase:

class App extends React.Component{ //se usa this en function props
  constructor(props){
    super(props);
    this.state={
      books:[
        {id:0, rating:4, title: 'Harry potter y el caliz de fuego', image:'libro01.jpg'},
        {id:1, rating:3, title: 'The shining', image:'libro02.jpg'},
        {id:2, rating:5, title: 'Codigo da vinci', image:'libro03.jpg'},
        {id:3, rating:5, title: 'El principito', image:'libro04.jpg'},
        {id:4, rating:5, title: 'Sobrenatural', image:'libro05.jpg'}
      ],
      copyBooks:[]
    };
  }
  componentDidMount(){
    this.initBooks();
  }

  initBooks=()=>{
    this.setState((state,props) => ({
      copyBooks:[...state.books]
    }));
  }
  onAdd=(item)=>{
    let temp=[...this.state.books];
    const id=temp[temp.length-1].id + 1; //+1
    item['id']=id;
    temp.push(item);
    this.setState({books:[...temp]});
    this.initBooks();
  }
  onSearch=(query)=>{
    if (query === ''){      
      this.initBooks();
      //this.setState({copyBooks: [...this.state.books]});
    }else{
      const temp=[...this.state.books];
      let res=[];

      temp.forEach(item =>{
        if(item.title.toLowerCase().indexOf(query)>-1){
          res.push(item);
        }
      });
      this.setState({copyBooks: [...res]});
    }
  }
  onUpdateRating=(item)=>{
    var temp=[...this.state.books];
    const index= temp.findIndex(x =>x.id === item.id);
    temp[index].title=item.title;
    temp[index].image=item.image;
    temp[index].rating=item.rating;
    this.setState({books: [...temp]});
    this.initBooks();
  }
  onRemove=(id)=>{
    var temp=[...this.state.books];
    const res= temp.filter(item =>item.id != id);
    this.setState({books: [...res]});
    this.initBooks();
  }
  //aqui salen las listas a publicar
  render(){
    return(
      <div className="app">
        <Menu title="amozon" onadd={this.onAdd} onsearch={this.onSearch}/>      
        <List items={this.state.copyBooks} 
              onupdaterating={this.onUpdateRating}
              onremove={this.onRemove}/>
      </div>

    );
  }
}

export default App;
//la clase que viene por defecto:



//<Menu nombre="Ana Paola"/>
/*
function App() {
  return (
    <div className="app">
      <Menu title="amozon"/>      
      <List />
    </div>    
  );
}*/


