export class Item {
    constructor(id:number,adi:string,aciklama:string,isSilah:boolean,isKiyafet:boolean,isBoost:boolean,oyunId:number,marketId:number){
        this.id=id;
        this.adi=adi;
        this.aciklama=aciklama;
        this.isSilah=isSilah;
        this.isKiyafet=isKiyafet;
        this.isBoost=isBoost;
        this.oyunId=oyunId;
        this.marketId=marketId;
    }
    public id:number;
    public adi:string;
    public aciklama:string;
    public isSilah:boolean;
    public isKiyafet:boolean;
    public isBoost:boolean;
    public oyunId:number;
    public marketId:number;
}
