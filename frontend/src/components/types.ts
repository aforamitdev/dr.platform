export enum HeaderType {
  SYSTEM,
  MEMORY,
  NETWORK,
  PROCESSOR,
  DISK,
}

export type System = {
  currentHeaderIndex: HeaderType;
};
