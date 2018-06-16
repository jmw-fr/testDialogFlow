export interface ITraduction {
    langue: string;
}

export interface IFormatResource {
    format: string;
    uri: string;
}

export interface IResource {
    formats: IFormatResource;
    langue: string;
    typeressource: string;
    uri: string;
}

export interface IFilm {
    _id: string;
    acteurs: string;
    avertissement: ITraduction[];
    codevisa: string;
    date_sortie: Date;
    datemodification: Date;
    distributeurid: number;
    duree: number;
    filmid: number;
    genre: ITraduction[];
    interdiction: string;
    label: string;
    paysorigine: string;
    push_line: ITraduction[];
    realisateurs: string;
    ressources: IResource[];
    synopsis: ITraduction[];
    titre_original: string;
    titres: ITraduction[];
    type_spectacle: string;
}
