import { NextAuthOptions } from 'next-auth'
import { SanityAdapter } from 'next-auth-sanity'
import GoogleProvider from 'next-auth/providers/google'

import sanityClient from './sanity'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  session: {
    strategy: 'jwt'
  },
  adapter: SanityAdapter(sanityClient),
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      if (!token?.email) return session

      const userIdObj = await sanityClient.fetch<{ _id: string }>(
        `*[_type == "user" && email == $email][0] {
        _id
      }`,
        { email: token.email }
      )

      return {
        ...session,
        user: {
          ...session.user,
          id: userIdObj?._id || null
        }
      }
    }
  }
}
