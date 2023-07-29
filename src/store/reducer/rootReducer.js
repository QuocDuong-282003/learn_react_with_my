

//state của thẳng redux . not react
 const initSate ={
    users:[
        {id:1, name: 'Dương'},
        {id: 2,name:'Handsome'}
    ]
 }


const rootReducer =(state = initSate, action )=>{

     return state;

}
export default rootReducer;