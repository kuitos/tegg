import { Attribute, Model } from '@eggjs/tegg-orm-decorator';
import { DataTypes, Bone } from 'leoric';

@Model()
export class App extends Bone {
  @Attribute(DataTypes.STRING)
  name: string;
  @Attribute(DataTypes.STRING)
  desc: string;
}
