import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github";

export const authOption = {
   providers: [
      githubAuth({
         clientId: process.env.GITHUB_ID,
         clientSecret: process.env.GITHUB_SECRET,
      }),
   ],
   secret: process.env.NEXT_AUTH_SECRET,
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
