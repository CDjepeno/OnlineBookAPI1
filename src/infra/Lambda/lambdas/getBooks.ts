
  export const config = {
    routes: ["GET /books"],
    props: {
      name: "getBooks",
      rdsAccess: true,
      description: "get Books",
    },
  };

  export const hassan = {name: "robleh"};

async function handler(event:any, context: any) {
  console.log('Got an event')
  console.log(event)
  return {
    statusCode: 200,
    body: 'Hello from lambda getBookss'
  }
}

export { handler }