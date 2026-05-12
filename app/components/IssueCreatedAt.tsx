'use client'

import { formatRelativeTime } from '@/lib/utils'

interface IssueCreatedAtProps {
  createdAt: Date | string
}

export default function IssueCreatedAt({ createdAt }: IssueCreatedAtProps) {
  return <>{formatRelativeTime(new Date(createdAt))}</>
}
