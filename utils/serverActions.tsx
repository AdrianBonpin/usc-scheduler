'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"

// NEXT AUTH
export default async function getSession() {
    return await getServerSession(authOptions)
}