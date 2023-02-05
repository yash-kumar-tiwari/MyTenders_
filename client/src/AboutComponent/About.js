import './About.css'
import { useState } from 'react';

function About()
{

    const [a, setA] = useState(100);
    const [b, setB] = useState(200);
    const [currentDate, setCurrentDate] = useState(Date());
    const [count, setCount] = useState(0);
    const [marks , setMarks] = useState([77,75,97,87,97]);
    const [users , setUsers] = useState({"uid":107,"username":"user1@gmail.com","password":12345});

    setTimeout(()=>{
        setCurrentDate(Date());
    },1000);

    const handleIncrement = ()=>{
        setCount(count+1);
    };

    const handleDecrement = ()=>{
        setCount(count-1);
    };

  return(

    <div>
        {/* Page Header Start */}
    <div class="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 class="display-4 text-white mb-3 mt-0 mt-lg-5">About</h1>
        <div class="d-inline-flex text-white">
            <p class="m-0"><a class="text-white" href="">Home</a></p>
            <p class="m-0 px-2">/</p>
            <p class="m-0">About</p>
        </div>
    </div>
    {/* Page Header Start */}

    {/* syntax to create state:

    const [state_name, state_function] = useState(value_if_any); */}
    <center>
    <h1>Working With State & Props</h1>

    <h2>User Details Loop Access : Iterate Object Values</h2>
    {/* iterate Object Keys */}
    {
        Object.values(users).map((value)=>(
            <p>
                {value};
            </p>
        ))
    }
    {
        Object.keys(users).map((key)=>(
            <p>
                {key};
            </p>
        ))
    }

    <hr/>
    <h2>User Details Manual Access:</h2>
    <p>uid : {users.uid}</p>
    <p>username : {users.username}</p>
    <p>password : {users['password']}</p>

    <hr/>
    <h2>Marks List Loop Access: </h2>

    {/* 
    Type 2 : Access Value and Indexing */}
    {
        marks.map((x,i)=>(
            <p>
                {i}------>{x};
            </p>
        ))
    }

    {/* 
    Type 1 : Access Only Value 
    {
        marks.map((x)=>(
            <p>
                {x}
            </p>
        ))
    } */}

    <hr/>
    <h2>Marks List Manual Access: </h2>
    <p>Marks 1 : {marks[0]}</p>
    <p>Marks 2 : {marks[1]}</p>
    <p>Marks 3 : {marks[2]}</p>
    <p>Marks 4 : {marks[3]}</p>
    <p>Marks 5 : {marks[4]}</p>


    <hr/>
    <h2>Counter: {count}</h2>
    <button onClick={handleIncrement}> + </button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={handleDecrement}> - </button>


    <hr/>
    <h2>Current Date: {currentDate}</h2>

    <hr/>
    <h2>Add Result:</h2>
    <p>Value of A: {a}</p>
    <p>Value of B: {b}</p>
    <p>Result Add: {a+b}</p>


    </center>
    </div>
    
  )
}

export default About;