import { BusinessList, ManufacturingBusinessList, NewYorkBusinessList } from "./BusinessList.js"

const businessesContainer = document.getElementById("businesses")
const newYorkBusinessesContainer = document.getElementById("businesses--newYork")
const manufacturingBusinessContainer = document.getElementById("businesses--manufacturing")


businessesContainer.innerHTML = BusinessList()
newYorkBusinessesContainer.innerHTML = NewYorkBusinessList()
manufacturingBusinessContainer.innerHTML = ManufacturingBusinessList()