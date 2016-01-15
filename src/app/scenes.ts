export const SCENES: ISceneList = [
];

interface ISceneListItem {
  id: number;
  title: string;
  children: Array<ISceneList>;
}

interface ISceneList extends Array<ISceneListItem> {}
