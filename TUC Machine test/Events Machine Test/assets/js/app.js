const cl=console.log

const stdcon=document.getElementById("student");
cl(stdcon)
const formcon=document.getElementById("forms");

const studentarr=[
    {
        fname:'om',
        lname:'khot',
        email:'omkhot0000@gmail.com',
        contact:8523568945,
        id:123
    },
    {
        fname:'jim',
        lname:'roxan',
        email:'jimroxan@gmail.com',
        contact:456789123,
        id:124
    }
]

const generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

const row=(arrays,idcon)=>{
    let res=``;

    arrays.forEach((std,i)=>{
        res+=`<tr id="${std.id}">
        <td>${i+1}</td>
        <td>${std.fname}</td>
        <td>${std.lname}</td>
        <td> ${std.email}</td>
        <td>${std.contact}</td>
        </tr>`
    })
    idcon.innerHTML=res;
}


row(studentarr,stdcon);



const onsbmit=(eve)=>{
    eve.preventDefault();

    let newstudent={
        fname:eve.target['0'].value,
        lname:eve.target['1'].value,
        email:eve.target['2'].value,
        contact:eve.target['3'].value,
        id:generateUuid()
    }
    studentarr.unshift(newstudent)
    cl(studentarr);
    row(studentarr,stdcon);
    eve.target.reset();
    
}




formcon.addEventListener('submit',onsbmit)