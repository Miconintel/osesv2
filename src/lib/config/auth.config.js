import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import admin from "@/app/admin/page";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      // console.log(user);
      // console.log(token);
      // console.log(user);
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
      // console.log(session);
      return session;
    },

    authorized({ request, auth }) {
      // console.log(auth);
      // console.log(request);
      const isLoggedIn = !!auth?.user;
      const isAdmin = auth?.role === "admin";
      //   confirming routes.
      const adminUrl = request?.nextUrl.pathname.includes("/admin");
      const loginUrl = request?.nextUrl.pathname.includes("/login");

      if (isLoggedIn && loginUrl) {
        // console.log("redirect");
        return NextResponse.redirect(new URL("/", request?.nextUrl));
      }
      if (!isLoggedIn && adminUrl) {
        // console.log("redirect");
        // return NextResponse.redirect(new URL("/", request?.nextUrl));
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
