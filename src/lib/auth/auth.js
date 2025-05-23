import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { User } from '../model/User';
import { connectDb } from '../utilities/util';
import bcrypt from 'bcryptjs';
import { authConfig } from '../config/auth.config';

// credentials authorize

const getUserFromDb = async (credentials) => {
  try {
    connectDb();

    const { email, password } = credentials;
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('incorrect password or email');
    }

    const passHash = user.password;

    const passWordCorrect = await bcrypt.compare(password, passHash);

    if (!passWordCorrect) {
      throw new Error('incorrect email or password');
    }

    return user;
  } catch (error) {
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
        user = await getUserFromDb(credentials);
        return user;
      } catch (e) {
        if (e.name === 'MongoServerSelectionError') {
          throw e;
        }
        // if the error is mongo server selection, then the next auth login, should see it as a callback error, and
        // that is why I am throwing the error. else, I wont throw it and the next auth login will tag it credential error
        // it is an internet error.

        //I caught the error, but dont want to throw it, so thay I can see the credential sign in error.
        // if I throw it, I am going to have to see callback error issue instead of credential sign in err.
        // throw e;
        // throwing this error, you can catch it at the actions and handle there, I prefer here.
      }
    },
  }),
];

// credential map

export const providerMap = providers.reduce((prev, provider, i) => {
  const newArray = [...prev];

  if (provider.id !== 'credentials') {
    const providerDetail = {
      id: provider.id,
      name: provider.name,
    };

    newArray.push(providerDetail);
  }
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

      const checkUser = await User.findOne({ email });

      if (!checkUser) {
        console.log('no user');
      }

      return isLoggedIn;
    },

    ...authConfig.callbacks,
  },
};

export const { signIn, signOut, handlers, auth } = NextAuth(myNextAuthOptions);

// this auth is for login signIn
