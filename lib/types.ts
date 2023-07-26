export interface DMCLogger {
    debug(message?: any, ...args: any): void
    error(message?: any, ...args: any): void
    info(message?: any, ...args: any): void
    warn(message?: any, ...args: any): void
}

export type LogMessage = string[] | Error | Record<string, any> | string | boolean;

export type LoggerImplementation = DMCLogger | ((verbosity: string) => DMCLogger);

export enum LogName {
    Debug = 'debug',
    Error = 'error',
    Info = 'info',
    None = 'none',
    Warn = 'warn',
}

export const LogLevelStyle = {
    Error: 'background:#d12727; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff',
    Info: 'background:#0468DB; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff;',
    Log: 'background:#5ece7b; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff;',
    Warn: 'background:#ecc713; padding: 2px; border-radius: 0 2px 2px 0;  color: #000;',
};
