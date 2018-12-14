import { Oyun } from "../Oyun";
import { Resim } from "../Resim";
import { Video } from "../Video";

export class OyunRequest {
    constructor(oyun:Oyun,resim:Resim,video:Video,kategorilerim: number[]){
        this.oyun=oyun;
        this.resim=resim;
        this.video=video;
        this.kategorilerim=kategorilerim;
    }
    public oyun:Oyun;
    public resim:Resim;
    public video:Video;
    public kategorilerim: number[];
}
