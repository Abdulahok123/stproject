var supertest = require('supertest')
const { expect } = require('chai')
const request = supertest('http://localhost:3000')
jest.setTimeout(30000)
it('Get subcategory 1', async () => {
  const response = await request.get('/api/s/1')
  console.log(response.body.pageData.name)
  expect(response.body.pageData.name).equal('Subcategory 1')
})
it.each([1, 2, 3, 4])('Get product (%s)', async page => {
  const response = await request.get(`/api/p/${page}`)
  console.log(response.body.pageData.title)
  expect(response.body.pageData.title).equal(`Product ${page}`)
})
it('check number of items used', async () => {
  const response = await request.get('/api/s/1?__v__=development&type=used&sort=rating')
  console.log(response.body.pageData.total)
  console.log(response.body.pageData.facets[2].options[1].matches)
  expect(response.body.pageData.total).not.equal(
    response.body.pageData.facets[2].options[1].matches
  )
})
