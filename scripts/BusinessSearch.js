import { getBusinesses } from "./database.js"

const businesses = getBusinesses()

const companySearchResult = document.getElementById("main")

const searchBox = document.getElementById("companySearch")
searchBox.addEventListener("keypress", 
        event => {
            
            if (event.key === "Enter") {
                const query = event.target.value
                let foundBusiness = null

                
            for (const business of businesses) {
                
                const queryLowerCase = query.toLowerCase()
                if (queryLowerCase.length === 0) {
                    companySearchResult.innerHTML = `Please enter a search term`
                } else if (business.companyName.toLowerCase().includes(queryLowerCase)) {
                    
                    foundBusiness = business
                }
                
            }
                /* 
                    When user presses enter, find the matching business.
                    You can use the `.includes()` method strings to
                    see if a smaller string is part of a larger string.

                    Example:
                        business.companyName.includes(keyPressEvent.target.value)
                */
                
                // implement .find() method here
                if (foundBusiness === null) {
                    companySearchResult.innerHTML = `Could not find a company that matched your terms. :(`
                } else {

                companySearchResult.innerHTML = `
                    <h2>
                    ${foundBusiness.companyName}
                    </h2>
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