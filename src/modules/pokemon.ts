interface PokemonType{
    name:string;
    level:number;
    type:string

}

export const Pokemon = class{
    name:string;
    level:number;
    type:string;
    
    constructor(_name:string,_level:number,_type:string){
        this.name = _name;
        this.level = _level;
        this.type = _type
    }
    console(){
        console.log(this.name)
    }
}