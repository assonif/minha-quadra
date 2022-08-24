import React from 'react';
import { Alert, Button, Text, View } from 'react-native';

import * as AppleAuthentication from 'expo-apple-authentication';
import * as AuthSession from 'expo-auth-session';
import * as Facebook from 'expo-facebook';
import * as WebBrowser from 'expo-web-browser';
// import { Container } from './styles';

type AuthResponse = {
    params: {
        access_token: string;
    };
    type: string;
}

WebBrowser.maybeCompleteAuthSession();

const Home = () => {

    const handleGoogleSignIn = async () => {
        try {
            const CLIENT_ID = '738220848410-hguhod2noj3c464qvip9uuogepbrc979.apps.googleusercontent.com';
            const REDIRECT_URI = 'https://auth.expo.io/@assonif/minha-quadra';
            const SCOPE = encodeURI('profile email');
            const RESPONSE_TYPE = 'token';

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

            const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

            console.log(type, params)
            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)

                const user = await response.json();

                console.log(user)
            }

        } catch (err) {
            console.log(err)
        }
    }

    const handleFacebookSignIn = async () => {
        try {
            console.log('1')
            const tt = await Facebook.initializeAsync('1196097591238917');
            console.log('1')
            const { type, token, expirationDate, permissions, declinedPermissions } =
                await Facebook.logInWithReadPermissionsAsync({
                    permissions: ['public_profile'],
                }) as any;
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            } else {
                // type === 'cancel'
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View>
            <Text>testing</Text>
            <Button title='Sign in with Google' onPress={handleGoogleSignIn} />
            <Button
                title="Facebook Login"
                onPress={handleFacebookSignIn}
            />
            <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                cornerRadius={5}
                style={{ width: 200, height: 44 }}
                onPress={async () => {
                    try {
                        const credential = await AppleAuthentication.signInAsync({
                            requestedScopes: [
                                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                                AppleAuthentication.AppleAuthenticationScope.EMAIL,
                            ],
                        });
                        console.log(credential)
                    } catch (e: any) {
                        if (e.code === 'ERR_CANCELED') {
                            console.log('cancelado')
                        } else {
                            console.log(e)
                        }
                    }
                }}
            />
        </View>
    );
}

export default Home;