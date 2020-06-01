export interface NavItem {
     title: string,
     href: string,
}
export interface Artist {
     portrait: string,
     name: string,
     country: string,
}
export interface Work {
     img: string,
     name: string,
     date: string,
     period?: string,
}
export interface Movement {
     banner: {
          img: string,
          artist: string,
          name: string,
          year: string,
          details: string
     },
     name: string,
     description: string,
}