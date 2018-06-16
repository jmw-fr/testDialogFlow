import { SignIn, Permission, Conversation, GoogleActionsV2SignInValue } from "actions-on-google";

export class LoginIntents {

    public static AskForSignIn(conv: Conversation<any>): void {
        conv.ask(new SignIn());
        // conv.ask(new Permission({
        //     context: 'Hi there, to get to know you better',
        //     permissions: 'NAME',
        //   }));
    }

    public static GetSignin(conv: Conversation<any>, params: any, signin: GoogleActionsV2SignInValue): void {
        if (signin.status === 'OK') {
        const access = conv.user.access.token // possibly do something with access token
        conv.ask('Great, thanks for signing in! What do you want to do next?')
        } else {
            conv.ask(`I won't be able to save your data, but what do you want to do next?`)
        }
    }
}
