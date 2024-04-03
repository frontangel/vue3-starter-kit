import { faker } from '@faker-js/faker'


export function SignIn(config: any) {
  let code = 200
  const { email, password } = JSON.parse(config.data)

  if (email !== 'va@devurai.com' || password !== 'qwerty123VIP') {
    return [401, { message: 'Login or password is incorrect!' }]
  }

  const data = {
    token: faker.string.hexadecimal({ length: 10 })
  }
  return [code, { data }]
}
