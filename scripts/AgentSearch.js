import {getBusinesses} from "./database.js"

const businesses = getBusinesses()

const agentSearchResult = document.getElementById("main")

const searchBox = document.getElementById("agentSearch")
searchBox.addEventListener("keypress", 
        event => {
        
          if (event.key === "Enter") {
            const query = event.target.value
            let foundBusiness =  null        
          
          for (const business of businesses) {
            if (query.length === 0) {
              agentSearchResult.innerHTML = `Please enter a search term!`
              
            } else if (business.purchasingAgent.nameFirst.toLowerCase().includes(query.toLowerCase()) || business.purchasingAgent.nameLast.toLowerCase().includes(query.toLowerCase()) ) {
              foundBusiness = business
            } 

          }
          if (foundBusiness === null) {
            agentSearchResult.innerHTML = `Could not find results based on your search terms`
          } else {

            agentSearchResult.innerHTML = `
                <h2>
                ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                </h2>
                <h3>
                ${foundBusiness.companyName}
                </h3>
                <section>
                ${foundBusiness.phoneWork}
                </section>
                <section>
                ${foundBusiness.addressFullStreet}
                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
      }
    });