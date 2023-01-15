export function setDate(day:number){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    let days = day
    let date = new Date()
    let requiredDate = new Date(date.getTime() + (days * 24 * 60 * 60 * 1000 ))
    let value = `${requiredDate.getDate()} ${monthNames[requiredDate.getMonth()]} ${requiredDate.getFullYear()}` 
    return  value
}