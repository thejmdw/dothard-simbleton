import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector("#main")

export const BusinessList = () => {
  const businesses = getBusinesses()
  
  contentTarget.innerHTML = "<h1>Active Businesses</h1>"

  businesses.forEach(
    (businessObject) => {
      contentTarget.innerHTML += Business(businessObject)
    }
  );
}