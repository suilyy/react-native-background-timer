import worker, { MessageEvents } from '@ohos.worker';

const workerPort = worker.workerPort;

workerPort.onmessage = (e: MessageEvents): void => {
  // e : MessageEvents, 用法如下：
  let data = e.data;
  data.rnInstance.emitDeviceEvent("backgroundTimer.timeout", null)
}
