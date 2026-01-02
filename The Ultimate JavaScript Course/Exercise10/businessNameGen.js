/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

DON'T USE ARRAYS
*/

function generateBusName(){
    let name = ""
    let adj = ""
    let shop = ""
    let another = ""

    let r1 = Math.random()
    let r2 = Math.random()
    let r3 = Math.random()

    console.log(r1, r2, r3)

    if(r1<1/3){
        adj = "Crazy "
    }
    else if(r1<2/3){
        adj = "Amazing "
    }
    else{
        adj = "Fire "
    }

    if(r2<1/3){
        shop = "Engine "
    }
    else if(r2<2/3){
        shop = "Foods "
    }
    else{
        shop = "Garments "
    }

    if(r3<1/3){
        another = "Bros "
    }
    else if(r3<2/3){
        another = "Limited "
    }
    else{
        another = "Hub "
    }

    name = name.concat(adj, shop, another)

    console.log("Business Name generated")
    console.log(`Business Name is: ${name}`)
}

generateBusName()