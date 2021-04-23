export const Business = (businessObject) => {

  return `
    <section class="business">
      <h2 class="business__name">${businessObject.companyName}</h2>
      <div class="business__address">
      <p>${businessObject.addressFullStreet}</p>
      <p>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
      </div>

    </section>
  `
  
}