import { GymsRepository } from '@/repositories/gyms-repository'
import { Gym } from '@prisma/client'

interface GetAllNearbyGymsUseCaseRequest {
  userLatitude: number
  userLongitude: number
}

interface GetAllNearbyGymsUseCaseResponse {
  gyms: Gym[]
}

export class GetAllNearbyGymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: GetAllNearbyGymsUseCaseRequest): Promise<GetAllNearbyGymsUseCaseResponse> {
    const gyms = await this.gymsRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    })

    return {
      gyms,
    }
  }
}
