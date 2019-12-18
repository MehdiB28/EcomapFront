// list of all actions use in the project
export const SET_CARDS='SET_CARDS';
export const SET_ALICARDS='SET_ALICARDS';
export const UNSET_ALICARDS='UNSET_ALICARDS';
export const SET_RCCARDS='SET_RCCARDS';
export const SET_AMAPCARDS='SET_AMAPCARDS';
export const SET_PAPCARDS='SET_PAPCARDS';
export const SET_CARICARDS='SER_CARICARDS';
export const SET_ABCARDS='SER_ABCARDS';


//Display all the cards

export function setCards(){

    const promise = fetch (`http://${global.IP}:3000/activites`)
        .then (response=>response.json());
            return {
                type:SET_CARDS,
                payload: promise
            }
        }


// Display Alimentation cards

export function Alicards(){

    const promise=fetch (`http://${global.IP}:3000/activites/Alimentation`)
    .then (response=>response.json());
        return {
            type:SET_ALICARDS,
            payload:promise
        }
}

export function UnAlicards(){

    const promise=fetch (`http://${global.IP}:3000/activites`)
    .then (response=>response.json());
        return {
            type:UNSET_ALICARDS,
            payload:promise
        }
}


// Display Recyclage cards
    export function Recycards(){

    const promise=fetch (`http://${global.IP}:3000/activites/Recy`)
    .then (response=>response.json());
        return {
            type:SET_RCCARDS,
            payload:promise
        }
}


// Display AMAP Cards

export function Amapcards(){

    const promise=fetch (`http://${global.IP}:3000/activites/AMAP`)
    .then (response=>response.json());
        return {
            type:SET_AMAPCARDS,
            payload:promise
        }
}


// Display PAP Cards

export function Papcards(){

    const promise=fetch (`http://${global.IP}:3000/activites/Pap`)
    .then (response=>response.json());
        return {
            type:SET_PAPCARDS,
            payload:promise
        }
}

// Display Caritative Cards

export function Caricards(){

    const promise=fetch (`http://${global.IP}:3000/activites/Cari`)
    .then (response=>response.json());
        return {
            type:SET_CARICARDS,
            payload:promise
        }
}



// Display Caritative Cards

export function Abcards(){

    const promise=fetch (`http://${global.IP}:3000/activites/AB`)
    .then (response=>response.json());
        return {
            type:SET_ABCARDS,
            payload:promise
        }
}
 

 