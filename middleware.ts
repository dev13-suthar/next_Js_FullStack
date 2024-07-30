// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // Define the paths that require authentication
  const protectedPaths = ['/home', '/spend', '/pay'];
  
  // Get the token from the request
  const token = await getToken({ req });

  // Check if the request is for the sign-in page
  if (req.nextUrl.pathname === '/signin') {
    // If the token is valid, redirect to the "/home" page
    if (token) {
      const url = req.nextUrl.clone();
      url.pathname = '/home'; // Redirect to "/home" page
      return NextResponse.redirect(url);
    }
  }

  // Check if the request is for a protected path
  if (protectedPaths.some(path => req.nextUrl.pathname.startsWith(path))) {
    // If the token is valid, allow access to protected routes
    if (token) {
      return NextResponse.next(); // Allow access to protected routes
    }

    // If the token is not valid, redirect to the sign-in page
    const signinUrl = req.nextUrl.clone();
    signinUrl.pathname = '/signin'; // Redirect to sign-in page
    return NextResponse.redirect(signinUrl);
  }

  // If the path is not protected, continue the request
  return NextResponse.next();
}

// Specify which paths the middleware should run on
export const config = {
  matcher: ['/home', '/spend', '/add', '/signin'], // Apply middleware to these paths
};