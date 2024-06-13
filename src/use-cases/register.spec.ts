/* eslint-disable @typescript-eslint/no-unused-vars */
import { it, describe, expect, beforeEach } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

let usersRepository: InMemoryUsersRepository
let sut: RegisterUseCase

describe('Register Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new RegisterUseCase(usersRepository)
  })

  it('should be able to register', async () => {
    const { user } = await sut.execute({
      name: 'Lucas Antunes',
      email: 'lucas.antunes@epicora.com.br',
      password: '12345678',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should be able to hash a password upon registration', async () => {
    const { user } = await sut.execute({
      name: 'Lucas Antunes',
      email: 'lucas@teste.com',
      password: '12345678',
    })

    const insPasswordCorrectHashed = await compare(
      '12345678',
      user.password_hash,
    )

    expect(insPasswordCorrectHashed).toBe(true)
  })

  it('should be able to validate if user already exists', async () => {
    const { user } = await sut.execute({
      name: 'Lucas Antunes',
      email: 'lucas@teste.com',
      password: '12345678',
    })

    await expect(() =>
      sut.execute({
        name: 'Lucas Antunes',
        email: 'lucas@teste.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
