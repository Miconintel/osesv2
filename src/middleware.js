import { auth } from "./lib/config/auth.config";
import { NextResponse } from "next/server";

export default auth;

// export default middleware = async (req) => {
//   const res = await auth(req);

//   return res;
// };

// export default auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
