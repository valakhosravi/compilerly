import { Production } from './../../classes/rule';
export let SBUCSGrammar = {
    terminals: [
        'main', '(', ')', '{' , '}', 'id', 'int', 'float', 'char',
        'double', '+', '*',  ';', '=', '==', '++', 'do', 'while',
        'if', 'else'
    ],
    variables: [
        'P', 'STS', 'ST', 'TY', 'E', 'T', 'E#', 'T#', 'F', 'WST',
        'BE', 'AST', 'AST#', 'FST', 'IFST', 'IFST#'
    ],
    // tokens: [
    //     {}
    // ],
    productions: [
        {
            left: 'P', right: 'main ( ) { STS }'
        }
        , {
            left: 'STS', right: 'ST STS'
        }
        , {
            left: 'STS', right: 'λ'
        }
        , {
            left: 'ST', right: 'TY id ;'
        }
        , {
            left: 'TY', right: 'int'
        }
        , {
            left: 'TY', right: 'float'
        }
        , {
            left: 'TY', right: 'char'
        }
        , {
            left: 'TY', right: 'double'
        }
        , {
            left: 'ST', right: 'AST'
        }
        , {
            left: 'AST', right: 'id = E AST#'
        }
        , {
            left: 'AST#', right: '== E ;'
        }
        , {
            left: 'AST#', right: ';'
        }
        , {
            left: 'E', right: 'T E#'
        }
        , {
            left: 'E#', right: '+ F E#'
        }
        , {
            left: 'E#', right: 'λ'
        }
        , {
            left: 'T', right: 'F T#'
        }
        , {
            left: 'T#', right: '* F T#'
        }
        , {
            left: 'T#', right: 'λ'
        }
        , {
            left: 'F', right: '( E )'
        }
        , {
            left: 'F', right: 'id'
        }
        , {
            left: 'ST', right: 'WST'
        }
        , {
            left: 'WST', right: 'while ( BE ) { STS }'
        }
        , {
            left: 'ST', right: 'DWST'
        }
        , {
            left: 'WST', right: 'do { STS } while ( BE )'
        }
        , {
            left: 'BE', right: 'BT BE#'
        }
        , {
            left: 'BE#', right: '|| BT BE#'
        }
        , {
            left: 'BE#', right: 'λ'
        }
        , {
            left: 'BT', right: 'BF BT#'
        }
        , {
            left: 'BT#', right: '&& BF BT#'
        }
        , {
            left: 'BT#', right: 'λ'
        }
        , {
            left: 'BF', right: 'id BF#'
        }
        , {
            left: 'BF#', right: 'T# E# == E'
        }
        , {
            left: 'BF#', right: 'λ'
        }
        , {
            left: 'FST', right: 'for ( AST ; BE ; IST ) { STS }'
        }
        , {
            left: 'IFST', right: 'if ( BE ) ST IFST#'
        }
        , {
            left: 'IFST#', right: 'else ST'
        }
        , {
            left: 'IFST#', right: 'λ'
        }
        , {
            left: 'IST', right: 'id ++ ;'
        }
    ]
};
// export let ArithmeticGrammar: Production[] = [
//     {
//         left: 'E',
//         right: 'TE#'
//     },
//     {
//         left: 'E#',
//         right: '+TE#'
//     },
//     {
//         left: 'E#',
//         right: 'λ'
//     },
//     {
//         left: 'T',
//         right: 'FT#'
//     },
//     {
//         left: 'T#',
//         right: '*T'
//     },
//     {
//         left: 'T#',
//         right: 'λ'
//     },
//     {
//         left: 'F',
//         right: 'id'
//     },
//     {
//         left: 'F',
//         right: '(E)'
//     },
// ];
