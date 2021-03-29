export class Quotes {
    map(arg0: (chosen: any) => any): any {
      throw new Error('Method not implemented.');
    }
    find(arg0: (selected: any) => boolean): any {
      throw new Error('Method not implemented.');
    }
    indexOf(upvotedQuote: any): number {
      throw new Error('Method not implemented.');
    }
    // tslint:disable-next-line:max-line-length
    constructor(public id: number, public name: string, public title: string, public description: string, public author: string, public dateCreated: Date, public likes: number, public dislikes: number, public isFavorite: boolean){

    }
}
