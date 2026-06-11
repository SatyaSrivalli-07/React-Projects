import Card from "./card";
function section(){
  let  employee=[
        {
        name:"meher",
        id:100,
        phone:7688859904,
        branch:"mech"
        },
        {
        name:"nikitha",
        id:100,
        phone:7688859904,
        branch:"civil" 
        }


    ];
    
        
    

    return (
        <section>
            <h3>My Website</h3>
            {employee.map((detail)=>(
            <Card 
          
           name={detail.name}
           id={detail.id}
           phone={detail.phone}
           branch={detail.branch}
        />

    ))}
</section>
    );
}
export default section;