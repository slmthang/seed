
import { authConfig } from "../amplify-cognito-config";
import { createServerRunner } from '@aws-amplify/adapter-nextjs'

export const { runWithAmplifyServerContext } = createServerRunner ({
    config: {
        Auth: authConfig
    }
});