const API_KEY = Cypress.env('API_KEY')
const API_URL = Cypress.env('API_URL')

const coordinates = {
  latitude: 41.403974115386156,
  longitude: 2.190814755930394,
}

describe('Open weather map', () => {
  const { latitude, longitude } = coordinates

  context('Happy path', () => {
    it("GET my address's current weather data", () => {
      cy.request({
        method: 'GET',
        url: `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      }).should(({ body, status, statusText }) => {
        const { city } = body
        expect(status).to.equal(200)
        expect(statusText).to.equal('OK')
        expect(city.country).to.equal('ES')
      })
    })
  })

  context('Unhappy path', () => {
    it('fails when using an invalid API key', () => {
      cy.request({
        method: 'GET',
        url: `${API_URL}?lat=${latitude}&lon=${longitude}&appid=ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,
        failOnStatusCode: false,
      }).should(({ body, status, statusText }) => {
        expect(status).to.equal(401)
        expect(statusText).to.equal('Unauthorized')
        expect(body.message).to.contain('Invalid API key.')
      })
    })
  })
})
