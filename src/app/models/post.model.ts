export interface Post {
    avatar: string,
    username: string,
    handle: string,
    content: string,
    mediaUrls?: string[],
    isVerified: boolean,
    likes: number,
    retweets: number,
    comments: number,
    timestamp: Date
    views: number,
    id: string,
    bookmarks: number,
}