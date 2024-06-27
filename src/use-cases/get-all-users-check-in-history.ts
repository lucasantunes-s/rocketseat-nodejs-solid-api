import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { CheckIn } from '@prisma/client'

interface GetAllUsersCheckInHistoryRequest {
  userId: string
  page: number
}

interface GetAllUsersCheckInHistoryResponse {
  checkIns: CheckIn[]
}

export class GetAllUsersCheckInHistoryUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    page,
    userId,
  }: GetAllUsersCheckInHistoryRequest): Promise<GetAllUsersCheckInHistoryResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}
