import Card from "./component/card";

const data = [
  { id: 1 ,
    subname:"Bahvesh",coursename:"bedb"
    ,insname:"jhbhd",
    Description:"hdbehd",
    enrollment:"djevde",
    courseduration:"jhdece",
    Schedule:"bejhde"
},
{ id: 1 ,
    subname:"Bahvesh",coursename:"bedb"
    ,insname:"jhbhd",
    Description:"hdbehd",
    enrollment:"djevde",
    courseduration:"jhdece",
    Schedule:"bejhde"
},
{ id: 1 ,
    subname:"Bahvesh",coursename:"bedb"
    ,insname:"jhbhd",
    Description:"hdbehd",
    enrollment:"djevde",
    courseduration:"jhdece",
    Schedule:"bejhde"
},
{ id: 1 ,
    subname:"Bahvesh",coursename:"bedb"
    ,insname:"jhbhd",
    Description:"hdbehd",
    enrollment:"djevde",
    courseduration:"jhdece",
    Schedule:"bejhde"
},
{ id: 1 ,
    subname:"Bahvesh",coursename:"bedb"
    ,insname:"jhbhd",
    Description:"hdbehd",
    enrollment:"djevde",
    courseduration:"jhdece",
    Schedule:"bejhde"
},
{ id: 1 ,
    subname:"Bahvesh",coursename:"bedb"
    ,insname:"jhbhd",
    Description:"hdbehd",
    enrollment:"djevde",
    courseduration:"jhdece",
    Schedule:"bejhde"
},

];
const Home = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
         
          {data.map((i)=>
            <Card subname={i.subname} coursename={i.coursename} insname={i.insname} Description={i.Description} enrollment={i.enrollment}
            courseduration={i.courseduration} Schedule ={i.Schedule} / >
          )

          }
        </div>
      </div>
    </div>
  );
};
export default Home;
