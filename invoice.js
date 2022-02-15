// for submit button
const submitButton = document.getElementById('detail-submit-btn');
 submitButton.addEventListener('click',function () {
    const buyerDetail = document.getElementById('buyer-details-input');
    document.getElementById('buyer-info').innerText = buyerDetail.value;
    buyerDetail.value = "";
});

// for add button
const addButton = document.getElementById('add-details-btn');
addButton.addEventListener('click',function () {
     const tableInfo = document.getElementById('info-table');
     const itemName = document.getElementById('item-name-input');
     const itemPrice = document.getElementById('item-price-input');
     const itemQuantity = document.getElementById('item-quantity-input');
     console.log(itemName.value,itemPrice.value,itemQuantity.value);
     {
        //     <!-- <tr>
        //     <th >1</th>
        //     <td>Mark</td>
        //     <td>Otto</td>
        //     <td>@mdo</td>
        // </tr> -->
        }
     const totalPrice =  parseInt(itemPrice.value) * parseInt(itemQuantity.value)  ;
     const tr = document.createElement('tr') ;
     const th = document.createElement('th') ;
     const td1 = document.createElement('td'); 
     const td2 = document.createElement('td'); 
     const td3 = document.createElement('td'); 

     td3.classList.add('item-total');

     th.innerText  = itemName.value;
     td1.innerText = itemPrice.value;
     td2.innerText = itemQuantity.value;
     td3.innerText = totalPrice;

     tr.appendChild(th);
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tableInfo.appendChild(tr);
     itemName.value = '';
     itemPrice.value = '';
     itemQuantity.value = '';
     totalCalculation();
});

function totalCalculation() {
   const  subTotal = calculateSubTotal();
   const subTotalDisplay = document.getElementById('sub-total');
   subTotalDisplay.innerText=subTotal;
   const tax = subTotal * .2;
      document.getElementById('tax').innerText = tax.toFixed(2);
      document.getElementById('grand-total').innerText = subTotal + tax;
      document.getElementById('grand-total-2').innerText = subTotal + tax;
}

function calculateSubTotal() {
   let subTotal = 0;
   const cost = document.getElementsByClassName('item-total');
   for (let i = 0; i < cost.length; i++) {
      const element = cost[i];
      const price = parseInt(element.innerText);
      subTotal = subTotal + price;
      
     
   }
   return subTotal;
}

