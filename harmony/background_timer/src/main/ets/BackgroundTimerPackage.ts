import { RNPackage, TurboModulesFactory } from '@rnoh/react-native-openharmony/ts';
import type { TurboModule, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';
import { BackgroundTimerTurboModule } from './BackgroundTimerTurboModule';

class BackgroundTimerTurboModuleFactory extends TurboModulesFactory {
  createTurboModule(name: string): TurboModule | null {
    if (name === 'BackgroundTimerTurboModule') {
      return new BackgroundTimerTurboModule(this.ctx);
    }
    return null;
  }

  hasTurboModule(name: string): boolean {
    return name === 'BackgroundTimerTurboModule';
  }
}

export class BackgroundTimerTurboModulePackage extends RNPackage {
  createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
    return new BackgroundTimerTurboModuleFactory(ctx);
  }
}
