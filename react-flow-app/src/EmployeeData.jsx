function EmployeeData({data})
{
    return(
        <>
        <p>Employee Id :{data.id}</p>
        <p>Employee name :{data.name}</p>
        <p>Employee salary :{data.salary}</p>
        </>
    )
}
export default EmployeeData;