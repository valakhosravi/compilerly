import { Production } from './../../classes/rule';
export let SBUCSGrammar = {
    terminals: [
        'main', '(', ')', '{' , '}', 'id', 'int', 'float', 'char',
        'double', '+', '*',  ';', '=', '==', '++', 'do', 'while',
        'if', 'else'
    ],
    variables: [
        'P', 'STS', 'ST', 'TY', 'E', 'T', 'E#', 'T#', 'F', 'DWST'
        , 'WST', 'BE', 'BE#', 'AST', 'AST#', 'FST', 'IFST', 'IFST#', 'BT'
        , 'BT#', 'IST', 'BF', 'BF#'
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
            left: 'ST', right: 'int id;'
        }
        , {
            left: 'ST', right: 'float id;'
        }
        , {
            left: 'ST', right: 'char id;'
        }
        , {
            left: 'ST', right: 'double id;'
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
            left: 'DWST', right: 'do { STS } while ( BE )'
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
            left: 'ST', right: 'FST'
        }
        , {
            left: 'FST', right: 'for ( AST ; BE ; IST ) { STS }'
        }
        , {
            left: 'ST', right: 'IFST'
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
