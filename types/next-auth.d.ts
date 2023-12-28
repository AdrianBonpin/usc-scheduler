import { role } from "@prisma/client"
import NextAuth from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id: String,
            name: string,
            email: string,
            image: String,
        }
    }
}