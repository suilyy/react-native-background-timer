import { TurboModule, RNOHError, Tag } from '@rnoh/react-native-openharmony/ts';
import { TM } from "@rnoh/react-native-openharmony/generated/ts"
import worker from '@ohos.worker';
import type { TurboModuleContext } from '@rnoh/react-native-openharmony/ts';

// import { BackgroundTimer } from './BackgroundTimerWorker'

export class BackgroundTimerTurboModule extends TurboModule implements TM.BackgroundTimerTurboModule.Spec {
  constructor(ctx: TurboModuleContext) {
    super(ctx);
  }


  start(arg: number) {
    //开个线程
    this.ctx.rnInstance.emitDeviceEvent("backgroundTimer", null)
  }

  stop() {
    //移除线程
  }

  setTimeout(id: number, timeout: number) {
    setTimeout(() => {
      this.ctx.rnInstance.emitDeviceEvent("backgroundTimer.timeout", id)
    }, timeout)
  }
}
