/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class VsockSocket {
  constructor(emitFn: (...args: any[]) => any, fd?: number | undefined | null)
  listen(port: number): void
  connect(cid: number, port: number, maxConnectionAttempts?: number): void
  end(): void
  shutdown(): void
  close(): void
  startRecv(): void
  writeText(data: string): void
  writeBuffer(data: Buffer): void
}
