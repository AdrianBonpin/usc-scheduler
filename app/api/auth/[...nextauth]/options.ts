import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";

import prisma from '@/utils/prisma'
import { Adapter } from "next-auth/adapters";

export const authOptions : AuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    session: { strategy: 'jwt' },
    providers: [

        // Insert Providers

    ],
    pages: {
        signIn: '/auth',
        error: '/auth'
    },
    callbacks: {
        session: ({ session, token }) => {
            session.user.id = token.id as string
            session.user.name = token.name as string
            session.user.email = token.email as string
            session.user.image = token.image as string
            return session
        },
        jwt: ({ token, user }) => {
            if (user) {
                const prismaUser = user as unknown as User
                return {
                    ...token,
                    id: prismaUser.id,
                    name: prismaUser.name,
                    email: prismaUser.email,
                    image: prismaUser.image,
                }
            }
            return token
        }
    }
}