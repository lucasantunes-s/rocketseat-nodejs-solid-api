import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { GetAllUsersCheckInHistoryUseCase } from '../get-all-users-check-in-history'

export function makeGetAllUserCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new GetAllUsersCheckInHistoryUseCase(checkInsRepository)

  return useCase
}
