export class SatistaRequest {

    public id:number;
    public satisFiyati:number;
    public itemId:number;
    public kullaniciId:number

    constructor(id:number,satisFiyati:number,itemId:number,kullaniciId:number){
        this.id=id;
        this.satisFiyati=satisFiyati; 
        this.itemId=itemId;
        this.kullaniciId=kullaniciId;
    }
 
}