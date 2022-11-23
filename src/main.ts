import {
  platformNativeScript,
  runNativeScriptAngularApp,
} from '@nativescript/angular';

import { AppModule } from './app/app.module';

// added this here so we can do some wiring -- without this, you won're receive a push token on iOS
require('nativescript-plugin-firebase');

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
