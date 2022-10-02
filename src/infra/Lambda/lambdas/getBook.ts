export const config = {
  routes: ["GET /books"],
  props: {
    name: "getBook",
    rdsAccess: true,
    description: "get Book",
  },
};


async function handler(event:any, context: any) {
  console.log('Got an event')
  console.log(event)
  return {
    statusCode: 200,
    body: 'Hello from lambda getBook'
  }
}

export { handler }