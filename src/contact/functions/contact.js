exports.handler = (event, _context, callback) => {
  console.log({ event })

  callback(null, {
    stateCode: 200,
    body: JSON.stringify({ boop: true }),
  })
}
