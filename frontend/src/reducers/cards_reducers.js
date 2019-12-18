import {SET_CARDS} from '../actions';
import {SET_ALICARDS} from '../actions';
import {SET_RCCARDS} from '../actions';
import {SET_AMAPCARDS} from '../actions';
import {SET_PAPCARDS} from '../actions';
import {SET_CARICARDS} from '../actions';
import {SET_ABCARDS} from '../actions';


export default function(dataCard,action){

   if (dataCard === undefined){
       return []
   } else if (action.type===SET_CARDS){
        return action.payload
    } else if (action.type===SET_ALICARDS){
        return action.payload
    } else if (action.type===SET_RCCARDS){
        return action.payload
    } else if (action.type===SET_AMAPCARDS){
        return action.payload
    } else if (action.type===SET_PAPCARDS){
        return action.payload
    } else if (action.type===SET_CARICARDS){
        return action.payload
    } else if (action.type===SET_ABCARDS){
        return action.payload
};
}
