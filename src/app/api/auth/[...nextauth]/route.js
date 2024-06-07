import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github";

const authOption = {
   providers: [
      githubAuth({
         clientId: "Ov23liooknygM3W4chyv",
         clientSecret: "a51ffe4a4a84c895c463cdb52409ccdbfecc5e54",
      }),
   ],
   secret: process.env.NEXT_AUTH_SECRET,
};
console.log(authOption);
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
