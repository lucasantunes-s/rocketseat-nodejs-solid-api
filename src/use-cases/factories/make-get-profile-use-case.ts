import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetProfileUseCase } from '../get-user-profile'

export function makeGetProfileUseCase() {
  const prismaRepository = new PrismaUsersRepository()
  const getProfileUseCase = new GetProfileUseCase(prismaRepository)

  return getProfileUseCase
}
