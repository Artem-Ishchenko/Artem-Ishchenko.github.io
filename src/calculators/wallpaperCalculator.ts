type Window = {
  heigth: number;
  width: number;
};

type Door = {
  heigth: number;
  width: number;
};

type AllData = {
  glovalLength: number;
  globalWidth: number;
  globalHeight: number;
  rollOption: 10 | 25;
  rapOption: 0 | 0.32 | 0.64;
  windows: Window[];
  doors: Door[];
};

export const calculateRoomWallpaper = (allData: AllData) => {
  const {
    glovalLength,
    globalWidth,
    globalHeight,
    rollOption,
    rapOption,
    windows,
    doors,
  } = allData;

  // Проверяем, что окна и двери не пустые, если они есть
  const totalWindowArea =
    windows.length > 0
      ? windows.reduce((sum, window) => sum + window.heigth * window.width, 0)
      : 0;

  const totalDoorArea =
    doors.length > 0
      ? doors.reduce((sum, door) => sum + door.heigth * door.width, 0)
      : 0;

  // Расчёт площади стен с учетом окон и дверей
  const wallArea = 2 * (glovalLength + globalWidth) * globalHeight;
  const wallpaperArea = wallArea - totalWindowArea - totalDoorArea;

  // Проверка на отрицательную площадь (если окна и двери слишком большие)
  if (wallpaperArea < 0) {
    return {
      rollsNeeded: 0,
      wallpaperArea: 0,
      totalArea: 0,
    };
  }

  // Площадь, которую покрывает один рулон (измеряем в m2)
  const rollArea = rollOption === 10 ? 10 * 1.06 : 25 * 1.06;

  // Раппорт на размер рулона
  const adjustedWallpaperArea = wallpaperArea + rapOption;

  // Расчёт необходимого количества рулонов
  const rollsNeeded = Math.ceil(adjustedWallpaperArea / rollArea);

  return {
    rollsNeeded,
    wallpaperArea: adjustedWallpaperArea,
    totalArea: wallpaperArea,
  };
};
