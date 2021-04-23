import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"

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