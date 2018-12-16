export class Satista {
    constructor(
        id:number,
        satisFiyati:number,
        itemId:number,
        adi:string,
        aciklama:string,
        url:string,
        kullaniciAdi:string
    ){
        this.id=id;
        this.satisFiyati=satisFiyati;
        this.aciklama=aciklama;
        this.itemId=itemId;
        this.url=url;
        this.kullaniciAdi=kullaniciAdi;
        this.adi=adi;
    }
    public id:number;
    public satisFiyati:number;
    public itemId:number;
    public adi:string;
    public aciklama:string;
    public url:string;
    public kullaniciAdi:string

}


