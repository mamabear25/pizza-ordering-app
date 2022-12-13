import { NextJwtVerifier, removeNamespaces, claimToArray } from '@serverless-jwt/next';

const verifyJwt = NextJwtVerifier({
    issuer: "https://dev-6el1c40g.us.auth0.com",
    audience: "fastfood",
  mapClaims: (claims) => {
    // Custom claims added in Auth0 have a prefix, which are removed here.
    const user = removeNamespaces('http://techmomma-fastfood.com/roles', claims);
    console.log(claims)

    // Convert the scope and roles claims to arrays so they are easier to work with.
    user.scope = claimToArray(user.scope);
    user.roles = claimToArray(user.roles);
    return user;
  }
});

export default verifyJwt;



