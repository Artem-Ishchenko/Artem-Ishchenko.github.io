export type WindowData = {
  heigth: number;
  width: number;
};

export type DoorData = {
  heigth: number;
  width: number;
};

export type AllData = {
  glovalLength: number;
  globalWidth: number;
  globalHeight: number;
  rollOption: 10 | 25;
  rapOption: 0 | 0.32 | 0.64;
  windows: WindowData[];
  doors: DoorData[];
};
