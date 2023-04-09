import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        console.log(process.env.GOOGLE_CLIENT_ID)
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/auth/google/callback',
            scope: ['email', 'profile'],
        });
    }
    async validate (
        access_token: string,
        refresh_token: string,
        profile: any,
        done: any,
    ): Promise<any> {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0]?.value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            access_token,
        }
        done(null, user)
    }
}
