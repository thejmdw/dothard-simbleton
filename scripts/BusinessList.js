import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"

// const contentTarget = document.querySelector("#main")

// export const BusinessList = () => {
//   const businesses = getBusinesses()
  
//   contentTarget.innerHTML = "<h1>Active Businesses</h1>"

//   businesses.forEach(
//     (businessObject) => {
//       contentTarget.innerHTML += Business(businessObject)
//     }
//   );
// }


export const BusinessList = () => {
  const businesses = getBusinesses()
  let businessHTML = "<h1>Active Businesses</h1>"

  businesses.forEach(
    (businessObject) => {
      businessHTML += Business(businessObject)
    }
  );

  return businessHTML
}

export const NewYorkBusinessList = () => {
  const businesses = getBusinesses()
  const isNewYorkBusiness = (businessObject) => {
    if (businessObject.addressStateCode === "NY") {
      return true
    }
    return false
  }
  let newYorkBusinessHTML = "<h1>New York Businesses</h1>"

  const filteredNewYorkBusinesses = businesses.filter( isNewYorkBusiness )
  
  filteredNewYorkBusinesses.forEach(
    (businessObject) => {
      newYorkBusinessHTML += Business(businessObject)
    }
  );
  return newYorkBusinessHTML
}

export const ManufacturingBusinessList = () => {
  const businesses =getBusinesses() 
  const isManufacturingBusiness = (businessObject) => {
    if (businessObject.companyIndustry === "Manufacturing") {
      return true
    }
    return false
  }
  let manufacturingBusinessHTML = "<h1>Manufacturing Businesses</h1>"

  const filteredManufacturingBusinesses = businesses.filter( isManufacturingBusiness) 
    
  filteredManufacturingBusinesses.forEach(
    (businessObject) => {
      manufacturingBusinessHTML += Business(businessObject)
    }
  );
  return manufacturingBusinessHTML
}