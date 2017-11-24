import { Production } from './../../classes/rule';
export let ArithmeticGrammar: Production[] = [
    {
        left: 'E',
        right: 'TE#'
    },
    {
        left: 'E#',
        right: '+TE#'
    },
    {
        left: 'E#',
        right: 'λ'
    },
    {
        left: 'T',
        right: 'FT#'
    },
    {
        left: 'T#',
        right: '*T'
    },
    {
        left: 'T#',
        right: 'λ'
    },
    {
        left: 'F',
        right: 'id'
    },
    {
        left: 'F',
        right: '(E)'
    },
];
