const { promisify } = require('util')
const awscred = require('awscred')

let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.TEST_ROOT = "https://256usx1m04.execute-api.us-east-1.amazonaws.com/dev"

  process.env.restaurants_api      = "https://256usx1m04.execute-api.us-east-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table    = "restaurants-howell"
  process.env.AWS_REGION           = "us-east-1"
  process.env.cognito_user_pool_id = "us-east-1_bSje4Z3aJ"
  process.env.cognito_client_id    = "5ikc1pj9cmsnhvldo2fu3i8tmt"
  process.env.cognito_server_client_id = "27d0o3kli1fs92a81q6lu6podp"
  
  const { credentials } = await promisify(awscred.load)()
  
  process.env.AWS_ACCESS_KEY_ID     = credentials.accessKeyId
  process.env.AWS_SECRET_ACCESS_KEY = credentials.secretAccessKey

  console.log('AWS credential loaded')

  initialized = true
}

module.exports = {
  init
}