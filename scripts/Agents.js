import { getBusinesses } from "./database.js"

let agents = null

const Agents = () => {
  const businesses = getBusinesses()


  let newId = 0
    agents = businesses.map(business => {
    const agentFullName = `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`
    const agentCompany = business.companyName
    const agentPhone = business.phoneWork
    newId++
    return {
      id: newId,
      fullName: agentFullName,
      company: agentCompany,
      phoneNumber: agentPhone
    }
  })
  return agents
}

Agents()
let agentsHTML = "<h1>Purchasing Agents</h1>"

agents.forEach(
  (agentObject) => {
    agentsHTML += `
    <section class="agent" id="agent--${agentObject.id}">
    <h2 class="agent__name">${agentObject.fullName}</h2>
    <div class="agent__info">
    <p>${agentObject.company}</p>
    <p>${agentObject.phoneNumber}</p>
    </div>

  </section>
    `
  }
  
)

const agentsContainer = document.getElementById("main")

agentsContainer.innerHTML = agentsHTML
