import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { GetAllNearbyGymsUseCase } from '../get-all-nearby-gyms'

export function makeGetAllNearbyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const getAllNearbyGymsUseCase = new GetAllNearbyGymsUseCase(gymsRepository)

  return getAllNearbyGymsUseCase
}
