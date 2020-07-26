// async function start() {
//     return await Promise.resolve('async is working')
// }

// start().then(console.log)

// const unUsed = 42

// class Utill {
//     static id = Date.now()
// }

// console.log('util id', Utill.id);
// console.log(unUsed);

import ('lodash').then( _ => {
    console.log('lodash', _.random(0, 42, true))
})
