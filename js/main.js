function priceUpdate(id){
    if(id === '8gb'){
        document.getElementById("memory_cost" ) .innerText = 0;
     }
    else if(id == '16gb'){
        document.getElementById("memory_cost" ) .innerText = 180;
    }
    else if(id == '256gb'){
        document.getElementById("storage_cost" ) .innerText = 0;
    }
    else if(id == '512gb'){
        document.getElementById("storage_cost" ) .innerText = 100;
    }
    else if(id == '1tb'){
        document.getElementById("storage_cost" ) .innerText = 180;
    }
    else if(id == '25'){
        document.getElementById("delivery_cost" ) .innerText = 0;
    }
    else if(id == '21'){
        document.getElementById("delivery_cost" ) .innerText = 20;
    }

const memoryCost = document.getElementById("memory_cost").innerText
const storageCost = document.getElementById("storage_cost").innerText
const deliveryCost = document.getElementById("delivery_cost").innerText
const totalCost = document.getElementById("total_cost")
const totalField = document.getElementById("discount_price")

const totalCalculation = parseInt(memoryCost)+parseInt(storageCost)+parseInt(deliveryCost)+1299

totalCost.innerText = totalCalculation
totalField.innerText = totalCalculation





}

document.getElementById("apply-btn").addEventListener('click',function(){

    const totalField = document.getElementById("discount_price")
    const copunCode = document.getElementById("coupon_code")
    console.log(totalField,copunCode)
    let  discountPrice

    if(copunCode.value == "stevekaku"){

     discountPrice = parseInt(totalField.innerText)*0.8
     console.log(discountPrice)
    }
    else{

        copunCode.value = ''
        return
    }


 totalField.innerText = discountPrice 
 copunCode.value = ''
 



})


