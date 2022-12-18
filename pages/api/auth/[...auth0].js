//  this sets up the server side of the application.
import { handleAuth, handleCallback} from '@auth0/nextjs-auth0';

const afterCallback = async (req, res, session, state) => {
    console.log(session);
    return session;
}

export default handleAuth({
    async callback(req, res) {
        try {
            await handleCallback(req, res, { afterCallback });
        } catch (error) {
            res.status(error.status || 500).end(error.message);
        }
    }
});

// This creates the following routes:

// /api/auth/login: The route used to perform login with Auth0.
// /api/auth/logout: The route used to log the user out.
// /api/auth/callback: The route Auth0 will redirect the user to after a successful login.
// /api/auth/me: The route to fetch the user profile from.