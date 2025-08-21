import { auth } from './lib/config/auth.config';

// this middleware auth is from the auth config
export default auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
