import { makeMethod } from './makeMethod';
import { LogName } from './types';

const defaultLogger = {
    debug: makeMethod(LogName.Debug, console.debug)(),
    error: makeMethod(LogName.Error, console.error)(),
    info: makeMethod(LogName.Info, console.info)(),
    warn: makeMethod(LogName.Warn, console.warn)(),
};

export default defaultLogger;
