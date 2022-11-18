import { StandardNftAttributes } from "./standard-nft-attributes.model";

export class StandardNft {
  name!: string;
  description!: string;
  image!: string;
  external_url!: string;
  attributes!: StandardNftAttributes[];
}
