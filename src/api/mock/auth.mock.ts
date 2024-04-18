import { faker } from '@faker-js/faker'

export function SignIn(config: any) {
  let code = 200
  const { email, password } = JSON.parse(config.data)

  if (email !== 'va@devurai.com' || password !== 'qwerty123VIP') {
    return [401, { message: 'Login or password is incorrect!' }]
  }

  const data = {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ2YUBkZXZ1cmFpLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.JAzQ8lLKEshmIcBkpuhi0IvJYKlZdg1CrKK84ZB3wc4',
    refreshToken: faker.string.hexadecimal({ length: 15 })
  }
  return [code, data]
}
