import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { User } from "../model/User";
import { connectDb } from "../utilities/util";
import bcrypt from "bcryptjs";
import { authConfig } from "../config/auth.config";

// credentials authorize

const getUserFromDb = async (credentials) => {
  try {
    connectDb();

    const { email, password } = credentials;
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("incorrect password or email");
    }

    const passHash = user.password;

    const passWordCorrect = await bcrypt.compare(password, passHash);

    if (!passWordCorrect) {
      throw new Error("incorrect email or password");
      // return null;
    }

    // console.log(passHash);
    // console.log(passWordCorrect);

    // console.log(email, password);
    // console.log(user);

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// list of providers

const providers = [
  Google({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
  }),

  Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.

    authorize: async (credentials) => {
      try {
        let user = null;

        // logic to verify if user exists
        // this logic only returns user or throws an error.
        user = await getUserFromDb(credentials);

        // return user object with the their profile data
        return user;
      } catch (e) {
        console.log(e);
        if (e.name === "MongoServerSelectionError") {
          throw e;
        }
        // I caught the error, but dont want to throw it, so thay I can see the credential sign in error.
        // if I throw it , I am going to have to see callback error issue instead of credential sign in err.
        // throw e;
        // throwing this error, you can catch it at the actions and handle there, I prefer here.
      }
    },
  }),
];

// credential map

export const providerMap = providers.reduce((prev, provider, i) => {
  const newArray = [...prev];

  if (provider.id !== "credentials") {
    const providerDetail = {
      id: provider.id,
      name: provider.name,
    };

    newArray.push(providerDetail);
  }
  // console.log(prev);
  return newArray;
}, []);

// authoptions begins

export const myNextAuthOptions = {
  ...authConfig,
  providers: providers,
  callbacks: {
    async signIn({ user }) {
      const isLoggedIn = true;

      const { email } = user;

      const checkUser = User.findOne({ email });

      if (!checkUser) {
        console.log("no user");
      }

      return isLoggedIn;
    },
    async jwt({ token, user }) {
      // console.log(user);
      // console.log(token);
      console.log(user);
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

    ...authConfig.callbacks,
  },
};

// export const {
//   signIn,
//   signOut,
//   handlers: { GET, POST },
//   auth,
// } = NextAuth(myNextAuthOptions);
export const { signIn, signOut, handlers, auth } = NextAuth(myNextAuthOptions);
