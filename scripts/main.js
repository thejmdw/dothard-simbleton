import { BusinessList } from "./BusinessList.js"
import "./BusinessSearch.js"
import "./AgentSearch.js"
// import { NewYorkBusinessList } from "./NewYorkBusinessList.js"
// import { ManufacturingBusinessList } from "./ManufacturingBusinessList.js"

const businessesContainer = document.getElementById("main")
// const newYorkBusinessesContainer = document.getElementById("businesses--newYork")
// const manufacturingBusinessContainer = document.getElementById("businesses--manufacturing")


businessesContainer.innerHTML = BusinessList()
// newYorkBusinessesContainer.innerHTML = NewYorkBusinessList()
// manufacturingBusinessContainer.innerHTML = ManufacturingBusinessList()