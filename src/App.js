// import './App.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import Test1 from './Component/Test1/Test1'
// import Test2 from './Component/Test2/Test2'
// import nature2 from './nature2.png'
// import nature4 from './nature4.png'
// import nature5 from './nature5.png'
// function App(){

//     let info=[{image:nature2,heading:"News App using ReactJS (Parsing XML RSS feed to JSON",body:"News App using ReactJS (Parsing XML to JSON) Photo by Chri4stina Morillo from PexelsLive Demo:",name:"Methul Kothari",date:"Aug 12,2020 04:32"},
//     {image:nature4,heading:"Medium Like Blogging App Using Angular 9 and Firebase",body:"Creating a Medium-Like Blog App Using Angular 9 and Firebase Photo by Miguel A.Padrinan from PexelsLive Demo",name:"Methul Kothari",date:"Jul 10,2020 10:59"},
//     {image:nature5,heading:"COVID 19 Tracker (Statistics) app Using Angular",body:"COVID 19 Tracker (Statistics) app Using Angular Dark Mode DemoIntroduction:Everyone is aware",name:"Methul Kothari",date:"Apr 04,2020 08:46"}]
//     return(
//         <div>
//             <Test1/>
//             <Test2 userObj={info[0]}/>
//             <Test2 userObj={info[1]}/>
//             <Test2 userObj={info[2]}/>
            
//         </div>
//     )
// }
// export default App;


































// // import x from './logo192.png'
// // import img1 from './logo.svg'
// // import Test from './Component/Test1/Test1.js'
// // import Test2 from './Component/Test2/Test2.js'
// // import Demo1 from './Component/Start-Demo/Demo/Demo1'
// // import formDemo from './Component/Forms/formDemo.js'
// // function App(){
// //   let myName='VIKAS';
// //   return(
// //     <div className='main'>
// //       <h2>NAME: {myName}</h2>
    

// //     </div>
// //   )
// // }
// // export default App;
// // function App(){
// //     let a='VIKAS RAJU';

// //     function handleEvent(){
// //         console.log("Iam here")
        
// //     }
// //     return(
// //         <div>
// //             <h1 bg-danger>Hello World</h1>
// //             <button onClick={handleEvent}>Submit</button>
// //             <img src={x} alt="nothing a pic"></img>
// //             <img src={img1} alt="ok" width="100px"></img>
// //             <Test name={a} />
// //             <Test2 name={a}></Test2>
            
// //         </div>
// //     )
// // }
// // export default App;




// // function App(){
    
// //     return(
// //         <div>
        
        
// //     <Demo1/>
// //     <Test />
// //     <Test2 />
// //     </div>
// //     )
// // }
// // export default App;
// // import FormDemo from './Component/Forms/FormDemo';
// // function App(){
// //     let fullname = "VikasRaju";
// //     return(
// //         <div>
// //         <FormDemo/>
// //         <h1>{fullname}</h1>

// //         </div>
// //     )
// // }
// // export default App;

// // import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// // import RootLayout from './RootLayout'
// // function App(){
// //     let browserRouter = createBrowserRouter([
// //         {
// //             path:'',
// //             element:<RootLayout/>,
// //             children:[
// //                 {
// //                     path:" ",
// //                     element:<Home />
// //                 },
// //                 {
// //                     path:" ",
// //                     element:<Register />
// //                 },
// //                 {
// //                     path:" ",
// //                     element:<Login/>
// //                 },
// //                 {
// //                     path:" ",
// //                     element:<Home />
// //                 },
// //             ]
// //         }
// //     ])
// //     return <RouterProvider router={browserRouter} />
// // }

// // export default App;

// // import Test1 from './Component/Test1/Test1.js';
// // import Test2 from './Component/Test2/Test2.js';

// // function App(){

// //     return(
// //         <div>
// //             <Test1/>
// //             <Test2 />
// //         </div>
// //     )
// // }
// // export default App;






// // FIRST CLASS
// // import img1 from './logo192.png'
// // function App(){

// //         let name="Vikas Raju";
// //         let email="rajkasapogu@gmail.com";
// //         let arr=["java","python","HTML","CSS"]
// //         let obj={
// //             course:"React",
// //             duration:6
// //         }
// //         let arrobj=[{eno:10,ename:"vikas"},{eno:20,ename:"Raju"},{eno:30,ename:"Babu"}]
// //     return(
// //         <div className='main'>
// //             <h1 class="text-success">Hello World</h1>
// //             <h3>name:{name}</h3>
// //             <h3>name:{email}</h3>
// //             {
// //                 arr.map((s,index)=><h3 key={index}>{s}</h3>)
// //             }
// //             <h3>{obj.course}</h3>
// //             <h3>{obj.duration}</h3>

// //             {
// //                 arrobj.map((arrobj)=><div><h3>{arrobj.eno}</h3><p >{arrobj.ename}</p></div>)
// //             }

// //             <table>
// //                 <thead>
// //                     <tr>
// //                     <th>Eno</th>
// //                     <th>Ename</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {
// //                     arrobj.map((arrobj)=><tr><td>{arrobj.eno}</td>
// //                     <td>{arrobj.ename}</td></tr>)
// //                      }
// //                 </tbody>
                   
// //             </table>
// //             <div><img src={img1} alt="pic missing"></img></div>
// //         </div>
// //     )
// // }
// // export default App;



// //SECOND CLASS
// // function App(){

// //     function handleEvent(){
// //             // let name="vikas raju";
// //             // <h1>{name}</h1>
// //         console.log("Hello World!");
// //     }
// //     function handleEvent2(a){
// //         console.log("second button",a)
// //     }

// //     return(
// //         <div>
// //         <button onClick={handleEvent}>Click Me!</button>
// //         <button onClick={()=>handleEvent2(3)}>Click me!!</button>
// //         </div>
// //     )
// // }
// // export default App;



// // function App(){
// // let users = [
// //     {
// //       id: 7,
// //       email: "michael.lawson@reqres.in",
// //       first_name: "Michael",
// //       last_name: "Lawson",
// //       avatar: "https://reqres.in/img/faces/7-image.jpg",
// //     },
// //     {
// //       id: 8,
// //       email: "lindsay.ferguson@reqres.in",
// //       first_name: "Lindsay",
// //       last_name: "Ferguson",
// //       avatar: "https://reqres.in/img/faces/8-image.jpg",
// //     },
// //     {
// //       id: 9,
// //       email: "tobias.funke@reqres.in",
// //       first_name: "Tobias",
// //       last_name: "Funke",
// //       avatar: "https://reqres.in/img/faces/9-image.jpg",
// //     },
// //     {
// //       id: 10,
// //       email: "byron.fields@reqres.in",
// //       first_name: "Byron",
// //       last_name: "Fields",
// //       avatar: "https://reqres.in/img/faces/10-image.jpg",
// //     },
// //     {
// //       id: 11,
// //       email: "george.edwards@reqres.in",
// //       first_name: "George",
// //       last_name: "Edwards",
// //       avatar: "https://reqres.in/img/faces/11-image.jpg",
// //     },
// //     {
// //       id: 12,
// //       email: "rachel.howell@reqres.in",
// //       first_name: "Rachel",
// //       last_name: "Howell",
// //       avatar: "https://reqres.in/img/faces/12-image.jpg",
// //     },
// //   ];

// //     return(
// //         {
// //             users.map((users,index)=>{
                
// //                     <div className='card'>
// //                         <p key={index}>{users.id}</p>
// //                         <p key={index}>{users.email}</p>
// //                         <p key={index}>{users.first_name}</p>
// //                         <p key={index}>{users.last_name}</p>
                    
// //                         <img src="{users.avatar}" alt="not found"></img>
// //                     </div>
                
// //             })
// //         })
    
// // }
// // export default App;



// //THIRD CLASS
// // import Demo1 from  './Component/Start-Demo/Demo/Demo1';
// // function App(){

// //     return(
// //         <div>
// //             <Demo1 />
// //         </div>
// //     )
// // }
// // export default App;





















// // import FormDemo from './Component/Forms/FormDemo'
// // function App(){

// //     return(
// //         <div>
// //            <FormDemo/>
// //         </div>
// //     )
// // }
// // export default App;


import {useState} from "react";
function App(){

    let [marks,setMarks]=useState([10,20])

    function changeMarks(){
        setMarks({...marks+1})
    }

    return(
        <div>
            <h1>{marks}</h1>
            <button onClick={changeMarks}>change marks</button>


        </div>
    )
}
export default App;