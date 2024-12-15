import NextAuth from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.id = token.id;
        session.role = token.role;
      }
      return session;
    },

    authorized({ request, auth }) {
      const isLoggedIn = !!auth?.user;
      const isAdmin = auth?.role === "admin";
      const adminUrl = request?.nextUrl.pathname.includes("/admin");
      const loginUrl = request?.nextUrl.pathname.includes("/login");

      if (isLoggedIn && loginUrl) {
        return NextResponse.redirect(new URL("/", request?.nextUrl));
      }
      if (!isLoggedIn && adminUrl) {
        return false;
      }

      if (adminUrl && !isAdmin) {
        return false;
      }

      return true;
    },
  },
};

export const { auth } = NextAuth(authConfig);
