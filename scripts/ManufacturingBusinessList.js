import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"

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