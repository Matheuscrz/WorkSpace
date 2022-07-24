const user = {
    id : 1505,
    displayName : 'Matheuscrz',
    fullName: {
        firstName: 'Matheus',
        lastName: 'Lima da Cruz'
    }
}
function userId({id}){
    return id;
}
function getfullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}
console.log(userId(user));
console.log(getfullName(user));