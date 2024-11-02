
// function App()
// {
//   const now = new  Date();


//   const  currentDate = now.toDateString();//e.g "wed oct 23 2024"
//   const currentTime = now.toLocaleTimeString();//e.g"2:30:45"

//     return(
//         <>
//         <h2>Current Date :{currentDate}</h2>
//         <h2>Current Time :{currentTime}</h2>
//         <h2>current date & time :{currentDate}  {currentTime}</h2>
//     </>
//   );
// }
// export default App;


function App()
{
  const now = new Date();
  const daysOfWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const monthsOfYear =["jan","feb","mar","Apr","May","jun","jul","Aug","Sep","Oct","Nov","Dec"]

  const day = daysOfWeek[now.getDay()];
  const monthIndex = monthsOfYear[now.getMonth()];
  const year = now.getFullYear();

  return(
    <>
      <h1>here we are doing some modification</h1>
    <p>Today :{day}</p>
    <p>Month :{monthIndex}</p>
    <p>Year :{year}</p>
    </>
  )
}
export default App;







