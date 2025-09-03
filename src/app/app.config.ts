import { ApplicationConfig, isDevMode } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideTransloco } from '@jsverse/transloco'
import { providePrimeNG } from 'primeng/config'
import Aura from '@primeng/themes/aura'
import { TranslocoHttpLoader } from './transloco-loader'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideTransloco({
      config: {
        availableLangs: ['en', 'sr'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
        // Add missing handler to prevent console errors
        missingHandler: {
          useFallbackTranslation: true,
          logMissingKey: false
        }
      },
      loader: TranslocoHttpLoader,
    }),
  ]
}