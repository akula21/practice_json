const express = require('express')
const fetch = require('cross-fetch')


const PORT = process.env.PORT || 5500

const app = express()

app.use(express.json())




const start = async () => {
    try {app.listen(PORT, () => console.log('Server started on port ' +PORT))
    } catch (e) {
        console.log(e)
    }
}

start()




// const response0 = await fetch(`https://jsonbase.com/lambdajson_type1/793`)

const res0 = `https://jsonbase.com/lambdajson_type1/793`
const res1 = `https://jsonbase.com/lambdajson_type1/955`
const res2 = `https://jsonbase.com/lambdajson_type1/231`
const res3 = `https://jsonbase.com/lambdajson_type1/931`
const res4 = `https://jsonbase.com/lambdajson_type1/93`
const res5 = `https://jsonbase.com/lambdajson_type2/342`
const res6 = `https://jsonbase.com/lambdajson_type2/770`
const res7 = `https://jsonbase.com/lambdajson_type2/491`
const res8 = `https://jsonbase.com/lambdajson_type2/281`
const res9 = `https://jsonbase.com/lambdajson_type2/718`
const res10 = `https://jsonbase.com/lambdajson_type3/310`
const res11 = `https://jsonbase.com/lambdajson_type3/806`
const res12 = `https://jsonbase.com/lambdajson_type3/469`
const res13 = `https://jsonbase.com/lambdajson_type3/258`
const res14 = `https://jsonbase.com/lambdajson_type3/516`
const res15 = `https://jsonbase.com/lambdajson_type4/79`
const res16 = `https://jsonbase.com/lambdajson_type4/706`
const res17 = `https://jsonbase.com/lambdajson_type4/521`
const res18 = `https://jsonbase.com/lambdajson_type4/350`
const res19 = `https://jsonbase.com/lambdajson_type4/64`


const userAction = async (res) => {
    // const response = await fetch('https://jsonbase.com/lambdajson_type4/521');

    const response = await fetch(res);

    const myJson = await response.json();

    for (const fkey in myJson) {
        let fvalue = myJson[fkey]
        if (fkey === 'isDone') console.log(res, 'is Done :', fvalue)
        let checkObject = typeof fvalue === 'object'
        if (checkObject) {
            for (const skey in fvalue) {
                let svalue = fvalue[skey]
                if (skey === 'isDone') console.log(res, 'is Done :', svalue)
                //let checkObject = typeof svalue === 'object'
                // if (checkObject) {
                //     for (const tkey in svalue) {
                //         let tvalue = svalue[tkey]
                //         if (tkey === 'isDone') console.log('isDone: ', tvalue)
                //         let checkObject = typeof tvalue === 'object'
                //         if (checkObject) {
                //
                //         }
                //     }
                // }
            }
        }
    }

}
const fuckingFuncForFunToSeeKeysOneByOneButWithoutItItsReallyFaster = async () => {
    await userAction(res0)
    await userAction(res1)
    await userAction(res2)
    await userAction(res3)
    await userAction(res4)
    await userAction(res5)
    await userAction(res6)
    await userAction(res7)
    await userAction(res8)
    await userAction(res9)
    await userAction(res10)
    await userAction(res11)
    await userAction(res12)
    await userAction(res13)
    await userAction(res14)
    await userAction(res15)
    await userAction(res16)
    await userAction(res17)
    await userAction(res18)
    await userAction(res19)
}

fuckingFuncForFunToSeeKeysOneByOneButWithoutItItsReallyFaster()

// ;c

// app.get('/', async (req, res) => {
//     console.log('kek')
//     return res.json('kek')
// })


