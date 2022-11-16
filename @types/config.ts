import { Transform } from "stream";

export type PersistConfig = {
  key: string; // the key for the persist
  storage: Object; // the storage adapter, following the AsyncStorage api
  version?: number; // the state version as an integer (defaults to -1)
  blacklist?: Array<string>; // do not persist these keys
  whitelist?: Array<string>; // only persist these keys
  transforms?: Array<Transform>;
  throttle?: number; // ms to throttle state writes
  keyPrefix?: string; // will be prefixed to the storage key
  debug?: boolean; // true -> verbose logs
  serialize?: boolean; // false -> do not call JSON.parse & stringify when setting & getting from storage
  writeFailHandler?: Function; // will be called if the storage engine fails during setItem()
};
