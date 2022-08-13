const products = document.querySelector(".productholder");
//cardContent= [["axis.jpg" ,"Personal Loan" ,"10.51%"]]
//element = products
function renderServiceCards(contentList, element){
    let code= `
    <div class="card">
            
            <div class="card-body">
              <h4><a href="#" class="linktxt">${contentList[0]}</a></h4>
              <h5><p class="card-text">
                ${contentList[1]}
                </p></h5>
            </div>
        </div>
    `;
    element.innerHTML += code;
}
const productsArray=[["Personal Loan" ,"10.51%"], ["Home Loan" ,"6.45%"], [
"Business Loan" ,"12.5%"], ["Balance Transfer" ,"10.51%"], ["Credit cards" ,"10.51%"]];

productsArray.map(item=> renderServiceCards(item, products))


/* <div class="card">
            <img src="moneylogo.jpg" class="card-img-top" >
            <div class="card-body">
              <h4><a href="#" class="linktxt">Personal Loan</a></h4>
              <h5><p class="card-text">
                10.15% ROI
                </p></h5>
            </div>
        </div> */


// let item1 =["axis.jpg" ,
//             "Personal Loan" ,
//             "10.51%"];


// let item2 =["hdfc.jpg" ,
//             "Home Loan" ,
//             "6.45%"];

// let item3 =["IndusInd.jpg" ,
//             "Business Loan" ,
//             "12.5%"];

// let item4 =["icici.jpg" ,
//             "Balance Transfer" ,
//             "10.51%"];
            
// let item5 =["kotak.jpg" ,
//             "Credit cards" ,
//             "10.51%"];

createCard(item1);
createCard(item2);
createCard(item3);
createCard(item4);
createCard(item5);
