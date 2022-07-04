const containerList = [{
  name: "personalCardContainer",
  element: document.querySelector("#banks"),
  cardArray: [["axis.jpg" ,"10.51%"],["hdfc.jpg" ,"10.51%"], ["IndusInd.jpg" ,"10.51%"],["icici.jpg", "10.51%"], ["kotak.jpg" ,"10.51%"]]
},{
  name: "businessCardContainer",
  element: document.querySelector("#bankb"),
  cardArray: [["axis.jpg" ,"12.5%"], ["hdfc.jpg" ,"12.5%"], ["IndusInd.jpg" ,"12.5%"], ["icici.jpg" ,"12.5%"],["kotak.jpg" ,"12.5%"] ]
},{
  name: "homeCardContainer",
  element: document.querySelector("#bankh"),
  cardArray: [["axis.jpg" ,"10.51%"],["hdfc.jpg" ,"10.51%"], ["IndusInd.jpg" ,"10.51%"],["icici.jpg", "10.51%"], ["kotak.jpg" ,"10.51%"]]
}]

containerList.map(container => {
  container.cardArray.map(card => {
    let code= `
      <div class="card">
          <img src="${card[0]}" alt=""class="card-img-top">
          <div class="card-body">
            <h4><a href="#" class="linktxt">${card[1]}</a></h4>
           
          </div>
      </div>
  `;
  container.element.innerHTML += code;
  })
})



// const personalCardContainer = document.querySelector("#banks");
// const businessCardContainer = document.querySelector("#bankb");
// const homeCardContainer = document.querySelector("#bankh");
// contentArray = ["axis.jpg" ,"10.51%"]
// element = personalCardContainer
// function renderBankCards(contentArray, element){
//   let code= `
//   <div class="card">
//           <img src="${contentArray[0]}" alt=""class="card-img-top">
//           <div class="card-body">
//             <h4><a href="#" class="linktxt">${contentArray[1]}</a></h4>
           
//           </div>
//       </div>
//   `;
//   element.innerHTML += code;
// }

// const personalCardArray =[["axis.jpg" ,"10.51%"],["hdfc.jpg" ,"10.51%"], ["IndusInd.jpg" ,"10.51%"],["icici.jpg", "10.51%"], ["kotak.jpg" ,"10.51%"]];

// const businessCardArray =[["axis.jpg" ,"12.5%"], ["hdfc.jpg" ,"12.5%"], ["IndusInd.jpg" ,"12.5%"], ["icici.jpg" ,"12.5%"],["kotak.jpg" ,"12.5%"] ];

// const homeCardArray=[["axis.jpg" ,"10.51%"],["hdfc.jpg" ,"10.51%"], ["IndusInd.jpg" ,"10.51%"],["icici.jpg", "10.51%"], ["kotak.jpg" ,"10.51%"]];

// personalCardArray.map(item=> renderBankCards(item,personalCardContainer) )
// businessCardArray.map(item=> renderBankCards(item,businessCardContainer) )
// homeCardArray.map(item=> renderBankCards(item,homeCardContainer) )



// let item11 =["axis.jpg" ,
//             "6.45%"];


// let item12 =["hdfc.jpg" ,
//             "6.45%"];

// let item13 =["IndusInd.jpg" ,
//             "6.45%"];

// let item14 =["icici.jpg" ,
//             "6.45%"];
            
// let item15 =["kotak.jpg" ,
//             "6.45%"];































// const bankProduct = document.querySelector(".banks");

// function bankCard([img,roi]){
//     let code= `
//     <div class="card">
//             <img src="${img}" alt=""class="card-img-top">
//             <div class="card-body">
//               <h4><a href="#" class="linktxt">${roi}</a></h4>
             
//             </div>
//         </div>
//     `;
//     bankProduct.innerHTML += code;
// }


/* <div class="card">
            <img src="moneylogo.jpg" class="card-img-top" >
            <div class="card-body">
              <h4><a href="#" class="linktxt">Personal Loan</a></h4>
              <h5><p class="card-text">
                10.15% ROI
                </p></h5>
            </div>
        </div> */

// let item1 =;


// let item2 =;

// let item3 =;

// let item4 =;
            
// let item5 =;

// bankCard(item1);
// bankCard(item2);
// bankCard(item3);
// bankCard(item4);
// bankCard(item5);





// const bankbProduct = document.querySelector(".bankb");

// function bankbCard([img,roi]){
//     let code= `
//     <div class="card">
//             <img src="${img}" alt=""class="card-img-top">
//             <div class="card-body">
//               <h4><a href="#" class="linktxt">${roi}</a></h4>
              
//             </div>
//         </div>
//     `;
//     bankbProduct.innerHTML += code;
// }


/* <div class="card">
            <img src="moneylogo.jpg" class="card-img-top" >
            <div class="card-body">
              <h4><a href="#" class="linktxt">Personal Loan</a></h4>
              <h5><p class="card-text">
                10.15% ROI
                </p></h5>
            </div>
        </div> */

// let item6 =;




// bankbCard(item6);
// bankbCard(item7);
// bankbCard(item8);
// bankbCard(item9);
// bankbCard(item10);
// bankbCard(item6);
// bankbCard(item7);
// bankbCard(item8);





// const bankhProduct = document.querySelector(".bankh");

// function bankhCard([img,roi]){
//     let code= `
//     <div class="card">
//             <img src="${img}" alt=""class="card-img-top">
//             <div class="card-body">
//               <h4><a href="#" class="linktxt">${roi}</a></h4>
              
//             </div>
//         </div>
//     `;
//     bankhProduct.innerHTML += code;
// }


/* <div class="card">
            <img src="moneylogo.jpg" class="card-img-top" >
            <div class="card-body">
              <h4><a href="#" class="linktxt">Personal Loan</a></h4>
              <h5><p class="card-text">
                10.15% ROI
                </p></h5>
            </div>
        </div> */



// bankhCard(item11);
// bankhCard(item12);
// bankhCard(item13);
// bankhCard(item14);
// bankhCard(item15);
