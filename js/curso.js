const contedorInfo =document.querySelector('.curso__details--text')
const contenedorPadre = document.querySelector('.cursos__details')
const buttonCerrar = document.querySelector('.cursos__details--btn')

const subMenuBtn = document.querySelectorAll('.submenu-btn')
for(let i=0; i<subMenuBtn.length;i++){
    subMenuBtn[i].addEventListener('click', function(){
        if(window.innerWidth < 964){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains('desplegar')){
                subMenu.classList.remove('desplegar');
                subMenu.removeAttribute('style');
            }else{
                subMenu.classList.add('desplegar')
                subMenu.style.height = height + "px";
            }
        }
    })
}

const cursos = [
    {
        id:1,
        title:'<br> Administración y Alta Dirección General<br>',
        contenido:`
        1. Administración de empresas <br>
        2. Administración de pequeñas empresas <br>
        3. Administración estratégica <br>
        4. Alta dirección empresarial <br>
        5. Asistencia de gerencia <br>
        6. Gerencia de producción. <br>
        7. Gerencia del desarrollo organizacional<br>
        `
    },
    {
        id:2,
        title:'<br>Agricultura<br>',
        contenido:`
        1. Cultivo de Flores y plantas ornamentales<br>
        2. Manejo integrado de control de plagas <br>
        3. Reforestación y agroforestería <br>
        4. Técnicas de explotación agrícola <br>
        5. Técnicas de jardinería <br>
        6. Control del plagas <br>
        7. Avicultura<br>
        `
    },
    {
        id:3,
        title:'<br>Alimentos<br>',
        contenido:`
        1. Control de calidad <br>
        2. Tecnología de añimentos <br>
        3. Inocuidad alimentaria <br>
        4. Industria manufacturera <br>
        5. Nutrición <br>
        6. Toxicología de alimentos <br>
        `
    },
    {
        id:4,
        title:'<br>Archivo y Biblioteconomía<br>',
        contenido:`
        1. Administración de archivos <br>
        2. Administración de bibliotecas <br>
        3. Gerencia bibliotecaria <br>
        4. Gerencia de bibliotecas <br>
        5. Archivo clínico <br>
        6. Gestión documental<br>
        7. Tecnología de archivos<br>
        `
    },
    {
        id:5,
        title:'<br> Patrimonios Cultural<br>',
        contenido:`
        1. Gestión de Museos <br>
        2. Arqueología y patrimonio <br>
        3. Gestión de patrimonio arqueológico <br>
        4. Gestión del patrimonio cultural<br>
        5. Museología<br>
        `
    },
    {
        id:6,
        title:'<br>Asuntos penitenciarios<br>',
        contenido:`
        1. Beneficios penitenciarios <br>
        2. Gerencia de establecimientos penitenciarios <br>
        3. Salud mental en establecimientos penitenciarios <br>
        4. Salud física en establecimientos penitenciarios <br>
        5. Seguridad en Salud mental en establecimientos penitenciarios <br>
        6. Seguridad penitenciaria<br>
        `
    },
    {
        id:7,
        title:'<br>Docencia<br>',
        contenido:`
        1. Auxiliar en educación inicial <br>
        2. Auxiliar en educación primaria <br>
        3. Auxiliar en educación secundaria <br>
        4. Docencia en educación inicial<br>
        5. Docencia en educación primaria <br>
        6. Docencia en educación secundaria <br>
        7. Educación por el arte <br>
        8. Y más <br>
        `
    },
    {
        id:8,
        title:'<br>Estimulación temprana<br>',
        contenido:`
        1. Estimulación del bebé antes de nacer <br>
        2. Estimulación del bebé intraútero <br>
        3. Estimulación prenatal <br>
        `
    },
    {
        id:9,
        title:'<br>Sistemas de Información<br>',
        contenido:`
        1. Administración de sistemas informáticos <br>
        2. Gerencia de sistemas informáticos <br>
        3. Informática y microcomputación <br>
        4. Ingeniería de sistemas <br>
        5. Ofimática <br>
        6. Sistemas de informacoón gerencial <br>
        `
    }
]
contedorInfo.innerHTML = `${cursos[0].title} <br> ${cursos[0].contenido}`
contedorInfo.classList.add('bloque')

const op1 = document.querySelector('.cursos__contain--item1');
const op2 = document.querySelector('.cursos__contain--item2');
const op3 = document.querySelector('.cursos__contain--item3');
const op4 = document.querySelector('.cursos__contain--item4');
const op5 = document.querySelector('.cursos__contain--item5');
const op6 = document.querySelector('.cursos__contain--item6');
const op7 = document.querySelector('.cursos__contain--item7');
const op8 = document.querySelector('.cursos__contain--item8');
const op9 = document.querySelector('.cursos__contain--item9');
const op10 = document.querySelector('.cursos__contain--item10');
const opciones = [op1,op2,op3,op4,op5,op6,op7,op8,op9,op10]

const detalles = ()=>(
    contedorInfo.innerHTML = `${cursos[0].title} <br> ${cursos[0].contenido}`
)
const detalles2 = ()=>(
    contedorInfo.innerHTML = `${cursos[1].title} <br> ${cursos[1].contenido}`,
    contenedorPadre.classList.toggle('m2')
)
const detalles3 = ()=>(
    contedorInfo.innerHTML = `${cursos[2].title} <br> ${cursos[2].contenido}`,
    contenedorPadre.classList.toggle('m3')
)
const detalles4 = ()=>(
    contedorInfo.innerHTML = `${cursos[3].title} <br> ${cursos[3].contenido}`,
    contenedorPadre.classList.toggle('m4')
)
const detalles5 = ()=>(
    contedorInfo.innerHTML = `${cursos[4].title} <br> ${cursos[4].contenido}`,
    contenedorPadre.classList.toggle('m5')
)
const detalles6 = ()=>(
    contedorInfo.innerHTML = `${cursos[5].title} <br> ${cursos[5].contenido}`,
    contenedorPadre.classList.toggle('m6')
)
const detalles7 = ()=>(
    contedorInfo.innerHTML = `${cursos[6].title} <br> ${cursos[6].contenido}`,
    contenedorPadre.classList.toggle('m7')
)
const detalles8 = ()=>(
    contedorInfo.innerHTML = `${cursos[7].title} <br> ${cursos[7].contenido}`,
    contenedorPadre.classList.toggle('m8')
)
const detalles9 = ()=>(
    contedorInfo.innerHTML = `${cursos[8].title} <br> ${cursos[8].contenido}`,
    contenedorPadre.classList.toggle('m9')
)
const detalles10 = ()=>(
    contedorInfo.innerHTML = `${cursos[9].title} <br> ${cursos[9].contenido}`
)

switch(opciones){
    case opciones[0].addEventListener('click', detalles):
        break;
    case opciones[1].addEventListener('click', detalles2):
        break;
    case opciones[2].addEventListener('click', detalles3):
        break;
    case opciones[3].addEventListener('click', detalles4):
        break;
    case opciones[4].addEventListener('click', detalles5):
        break;
    case opciones[5].addEventListener('click', detalles6):
        break;
    case opciones[6].addEventListener('click', detalles7):
        break;
    case opciones[7].addEventListener('click', detalles8):
        break;
    case opciones[8].addEventListener('click', detalles9):
        break;
    case opciones[9].addEventListener('click', detalles10):
        break;
    default:
        console.log('no hay datos')
}