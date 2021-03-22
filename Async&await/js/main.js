function checkAge(age) {
    return new Promise ((resolve, reject)=>{
        console.log(`Twój wiek to ${age}`);
        if (18<=age) {
            resolve(`możesz wejść`);
        } else {
            reject(`jesteś za młody`);
        }
    })
};
function doubleCheck(confirmAge) {
    return new Promise((resolve, reject) => { console.log(`Sprawdzenie jeszcze raz`);
resolve(`Faktycznie: ${confirmAge}`)}
    )
};
// checkAge(2)
//     .then(res=>{
//         console.log(`.then RES ${res}`);
//         return doubleCheck(res)
//     })
//     .then(dChecked => {
//         console.log(dChecked);
//     })
//     .catch(err => console.log(err))
// checkAge(22)
//     .then(res=>{
//         console.log(`.then RES ${res}`);
//         return doubleCheck(res)
//     })
//     .then(doubleChecked => {
//         console.log(doubleChecked);
//     })
//     .catch(err => console.log(err))


//FUNKCJA ASYNCHRONICZNA! async await // można używac zamiast then i catch, kod wyglada bardzij jak synchroniczny, zajmuje mniej miejsca 

async function checkAge2() {
    try{    
        const age = await checkAge(3);
        console.log('Jest ok możesz wejsć');
        const dbCheck = await doubleCheck(age);
        console.log(dbCheck);
    } catch(err){
        console.log(err);
    }}
checkAge2();