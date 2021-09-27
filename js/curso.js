const itemCurso = document.querySelector('.cursos__contain--item')
const pulsarCurso = itemCurso.addEventListener('click', a)

switch (pulsarCurso){
        case itemCurso.querySelector('text1'):
            console.log('hola1')
            break
        case itemCurso.querySelector('text2'):
            console.log('hol2')
            break
        case itemCurso.querySelector('text3'):
            console.log('hola3')
            break
        case itemCurso.querySelector('text4'):
            console.log('hola4')
            break
        default:
            console.log('hola5')
            break
    }

