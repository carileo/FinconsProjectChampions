export class Match{
    constructor(public id: number, public competition: string, public season: string, public utcDate: string,
        public status: string, public minute: string, public attendance: number, public venue: string,
        public matchday: string, public stage: string, public homeTeam: string, public awayTeam: string,
        public score: string){}
    }
