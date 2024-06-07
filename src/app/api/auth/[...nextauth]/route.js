import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github";

const authOption = {
   providers: [
      githubAuth({
         clientId: "Ov23liwtAmTQVGO1MZqq",
         clientSecret: "c7e29397d4ae094a11193c8a3431a8c41f06b482",
      }),
   ],
   secret: process.env.NEXT_AUTH_SECRET,
};
console.log(authOption);
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
