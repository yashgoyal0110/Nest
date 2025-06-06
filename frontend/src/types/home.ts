import { TopContributorsTypeGraphql } from 'types/contributor'
import { EventType } from 'types/event'
import { ProjectIssuesType, ProjectReleaseType, ProjectMilestonesType } from 'types/project'

export type MainPageData = {
  topContributors: TopContributorsTypeGraphql[]
  recentIssues: ProjectIssuesType[]
  recentReleases: ProjectReleaseType[]
  upcomingEvents: EventType[]
  recentPullRequests: PullRequestsType[]
  recentMilestones: ProjectMilestonesType[]
  recentChapters: {
    createdAt: string
    key: string
    leaders: string[]
    name: string
    suggestedLocation: string
  }[]
  recentPosts: {
    authorName: string
    authorImageUrl: string
    publishedAt: string
    title: string
    url: string
  }[]
  recentProjects: {
    createdAt: string
    key: string
    leaders: string[]
    name: string
    openIssuesCount: number
    repositoriesCount: number
    type: string
  }[]
  sponsors: SponsorType[]
  statsOverview: {
    activeChaptersStats: number
    activeProjectsStats: number
    contributorsStats: number
    countriesStats: number
    slackWorkspaceStats: number
  }
}

export type SponsorType = {
  imageUrl: string
  name: string
  sponsorType: string
  url: string
}

export type PullRequestsType = {
  author: {
    avatarUrl: string
    login: string
    name: string
  }
  organizationName: string
  createdAt: string
  title: string
  url: string
}
