import { Metadata } from "next"

// Metadata
export function consMeta({
    title = 'ScheDual',
    description = 'A sideprojet aimed to generate quick and easy weekly schedules for University of San Carlos Students',
    image = '/thumbnail.png',
    icons = '/logo.svg',
    noIndex = false
} : {
    title? : string
    description? : string
    image? : string
    icons? : string
    noIndex? : boolean
} = {}) : Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{
                url: image
            }]
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@adrianbonpin'
        },
        icons,
        metadataBase: new URL('https://adrianbonpin.online'), // Replace
        ...(noIndex && {
            robots: {
                index: false,
                follow: false
            }
        })
    }
}