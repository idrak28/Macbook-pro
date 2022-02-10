
//set  price function
function setBestPrice(memory,price,priceSet){
    const bestPrice= document.getElementById(priceSet) ;
    bestPrice.innerText= price;
    // total price set 
    totalPrice.innerText=parseInt(document.getElementById('best-price').innerText) +parseInt(document.getElementById('ssd-cost').innerText)+parseInt(document.getElementById('delivery-charge').innerText);
}

// extra memory cost
document.getElementById('memory-8').addEventListener('click', function(){
    setBestPrice('memory-8','1250','best-price');
})

document.getElementById('memory-16').addEventListener('click', function(){
   setBestPrice('memory-16','1450','best-price');
})
// extra memory cost end
/*
*/
//extra ssd cost 

document.getElementById('ssd-128').addEventListener('click', function(){
    
    setBestPrice('ssd-128','0','ssd-cost');
})
document.getElementById('ssd-256').addEventListener('click', function(){
    setBestPrice('sdd-256','150','ssd-cost');
})
document.getElementById('ssd-500').addEventListener('click', function(){
    setBestPrice('sdd-500','250','ssd-cost');
})
// extra memory cost end
//Delivery charge
document.getElementById('delivery-free').addEventListener('click', function(){
    
    setBestPrice('delivery-free','0','delivery-charge');
})
document.getElementById('delivery-20').addEventListener('click', function(){
    
    setBestPrice('delivery-20','20','delivery-charge');
})
const totalPrice=document.getElementById('total-price');
//Delivery charge end
// Promo code 
document.getElementById('apply').addEventListener('click', function(){
    
    const promoCode=document.getElementById('promo-code');
    const code=promoCode.value;
    if(code=='meww'){
        const total = document.getElementById('total');
        
        total.innerText= parseInt(totalPrice.innerText)*0.8;
    }
    })
//Promo code end



