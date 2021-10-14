import NextAuth from "next-auth"
import Provider from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Provider.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN
    }),
    // ...add more providers here
  ],
})