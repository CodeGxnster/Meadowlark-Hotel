const handlers = require("../handlers")
const fortune = require("../fortune")

test("home page renders", () => {
  const req = { }
  const res = { render: jest.fn() }
  handlers.home(req, res)
  expect(res.render.mock.calls[0][0]).toBe("home")
})

test("about page renders", () => {
  const req = { }
  const res = { 
    render: jest.fn()
  }
  handlers.about(req, res)
  expect(res.render.mock.calls.length).toBe(1)
  expect(res.render.mock.calls[0][0]).toBe("about")
  expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({ fortune: expect.stringMatching(/\W/),}))
})

test("Not found page renders", () => {
  const req = { }
  const res = { 
    render: jest.fn(),
    status: jest.fn()
  }
  handlers.notFound(req, res)
  expect(res.render.mock.calls[0][0]).toBe("404")
  expect(res.status.mock.calls[0][0]).toBe(404)
})


test("Internal Server Error", () => {
  const req = { }   
  const res = {
    render: jest.fn(),
    status: jest.fn()
  }

  const err = new Error("Some Error") 
  const next = jest.fn()

  handlers.internalError(err, req, res, next) 
  expect(res.render.mock.calls[0][0]).toBe("500")
  expect(res.status.mock.calls[0][0]).toBe(500)


})
